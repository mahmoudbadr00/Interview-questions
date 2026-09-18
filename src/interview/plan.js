// interview/plan.js
// Turns a config into an ordered list of interview steps. Deterministic given
// the same random source; categories are interleaved rather than run in
// blocks, and questions that are due for review are more likely to be picked.
import { difficultyRank } from '../data/difficulty.js';
import { depthForDifficulty, DEPTH_ORDER } from '../data/model.js';
import { QUESTION_MODE } from './config.js';

const CHALLENGE_KINDS = new Set(['scenario', 'debug', 'coding', 'design', 'tradeoff']);
const MAX_FOLLOW_UPS_PER_QUESTION = 2;

const shuffle = (list, random) => {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

/** Weighted sample without replacement. */
const weightedTake = (items, count, weightOf, random) => {
  const pool = items.map((item) => ({ item, weight: Math.max(0.01, weightOf(item)) }));
  const picked = [];
  while (picked.length < count && pool.length) {
    const total = pool.reduce((s, p) => s + p.weight, 0);
    let r = random() * total;
    let index = 0;
    for (; index < pool.length; index++) {
      r -= pool[index].weight;
      if (r <= 0) break;
    }
    const [chosen] = pool.splice(Math.min(index, pool.length - 1), 1);
    picked.push(chosen.item);
  }
  return picked;
};

const depthRank = (q) => DEPTH_ORDER.indexOf(q.depth ?? depthForDifficulty(q.difficulty));

const toStep = (question, extra = {}) => ({
  id: extra.parentId ? `${extra.parentId}::${question.id}` : question.id,
  questionId: question.id,
  sectionId: question.sectionId,
  difficulty: question.difficulty,
  depth: question.depth ?? depthForDifficulty(question.difficulty),
  kind: question.kind ?? 'concept',
  isFollowUp: false,
  ...extra,
});

/**
 * @param {object} config          sanitized interview config
 * @param {object} deps
 * @param {Array}  deps.questions  allQuestions (with sectionId)
 * @param {(q) => number} [deps.weightOf]  spaced-repetition weight, default 1
 * @param {() => number} [deps.random]
 */
export const buildPlan = (config, { questions, weightOf = () => 1, random = Math.random }) => {
  const byId = new Map(questions.map((q) => [q.id, q]));

  // Explicit question list (e.g. "practice what is due") bypasses selection.
  let selected;
  if (Array.isArray(config.questionIds) && config.questionIds.length) {
    selected = config.questionIds.map((id) => byId.get(id)).filter(Boolean).slice(0, config.questionCount);
  } else {
    const categories = new Set(config.categories);
    let pool = questions.filter((q) => categories.has(q.sectionId));
    if (config.difficulty !== 'mixed') {
      const filtered = pool.filter((q) => q.difficulty === config.difficulty);
      // Fall back to the whole pool rather than producing an empty interview.
      if (filtered.length >= Math.min(config.questionCount, 3)) pool = filtered;
    }
    if (config.questionMode === QUESTION_MODE.questionsOnly) {
      // Keep the flow conversational: no code challenges unless the user
      // explicitly chose a challenge category.
      const plain = pool.filter((q) => !CHALLENGE_KINDS.has(q.kind) || ['debugging', 'coding', 'systemDesign'].includes(q.sectionId));
      if (plain.length >= config.questionCount) pool = plain;
    }

    // Share the count across categories, then interleave.
    const perCategory = new Map();
    for (const q of pool) {
      if (!perCategory.has(q.sectionId)) perCategory.set(q.sectionId, []);
      perCategory.get(q.sectionId).push(q);
    }
    const categoryIds = shuffle([...perCategory.keys()], random);
    const base = Math.floor(config.questionCount / Math.max(1, categoryIds.length));
    let remainder = config.questionCount - base * categoryIds.length;

    const queues = categoryIds.map((sectionId) => {
      const want = base + (remainder-- > 0 ? 1 : 0);
      const list = perCategory.get(sectionId);
      const challengeBoost = (q) =>
        config.questionMode === QUESTION_MODE.full && CHALLENGE_KINDS.has(q.kind) ? 1.6 : 1;
      // Follow-up modes should actually produce follow-ups.
      const followUpBoost = (q) =>
        config.questionMode !== QUESTION_MODE.questionsOnly && q.followUps?.length ? 2.2 : 1;
      const picked = weightedTake(list, want, (q) => weightOf(q) * challengeBoost(q) * followUpBoost(q), random);
      // Easier first inside each category so the interview ramps up.
      return picked.sort(
        (a, b) => difficultyRank(a.difficulty) - difficultyRank(b.difficulty) || depthRank(a) - depthRank(b)
      );
    });

    // Top up if some categories were short.
    let total = queues.reduce((s, q) => s + q.length, 0);
    if (total < config.questionCount) {
      const used = new Set(queues.flat().map((q) => q.id));
      const rest = pool.filter((q) => !used.has(q.id));
      const extra = weightedTake(rest, config.questionCount - total, weightOf, random);
      for (const q of extra) {
        const queue = queues[categoryIds.indexOf(q.sectionId)];
        if (queue) queue.push(q);
      }
    }

    // Round-robin interleave.
    selected = [];
    let active = true;
    for (let i = 0; active; i++) {
      active = false;
      for (const queue of queues) {
        if (i < queue.length) {
          selected.push(queue[i]);
          active = true;
        }
      }
    }
    // Round-robin keeps categories alternating; the sort inside each queue
    // means difficulty still rises across the whole session.
  }

  const includeFollowUps = config.questionMode !== QUESTION_MODE.questionsOnly;
  const steps = [];
  for (const question of selected) {
    steps.push(toStep(question));
    if (includeFollowUps && Array.isArray(question.followUps)) {
      const limit = config.questionMode === QUESTION_MODE.full ? MAX_FOLLOW_UPS_PER_QUESTION : 1;
      question.followUps.slice(0, limit).forEach((fu, i) => {
        steps.push({
          id: `${question.id}::${fu.id}`,
          questionId: question.id,
          followUpId: fu.id,
          followUpIndex: i,
          sectionId: question.sectionId,
          difficulty: question.difficulty,
          depth: DEPTH_ORDER[Math.min(DEPTH_ORDER.length - 1, depthRank(question) + i + 1)],
          kind: question.kind ?? 'concept',
          isFollowUp: true,
          parentId: question.id,
        });
      });
    }
  }

  return {
    steps,
    questionCount: selected.length,
    categories: [...new Set(selected.map((q) => q.sectionId))],
  };
};

/**
 * Resolves a plan step to the actual content to show.
 * Follow-ups fall back to the parent's key points when they define none.
 */
export const resolveStep = (step, findQuestion) => {
  const question = findQuestion(step.questionId);
  if (!question) return null;
  if (!step.isFollowUp) return { question, prompt: question.question, answer: question.answer, keyPoints: question.keyPoints ?? [], code: question.code, alternatives: question.alternatives, star: question.star };
  const followUp = (question.followUps ?? []).find((f) => f.id === step.followUpId);
  if (!followUp) return null;
  return {
    question,
    followUp,
    prompt: followUp.question,
    answer: followUp.answer,
    keyPoints: followUp.keyPoints ?? [],
    code: undefined,
    alternatives: undefined,
    star: false,
  };
};
