// progress/store.js
// Practice history per question, derived category stats, readiness and a
// simple spaced-repetition schedule. Pure functions over localStorage.
import { readJSON, writeJSON, removeKey } from '../lib/storage.js';

export const PROGRESS_KEY = 'progress.attempts';
const DAY = 24 * 60 * 60 * 1000;

const RATING_SCORE = { correct: 1, partial: 0.5, incorrect: 0 };

/** Review intervals (days) by rating; correct grows with the streak. */
const intervalFor = (rating, streak) => {
  if (rating === 'incorrect') return 1;
  if (rating === 'partial') return 3;
  return Math.min(30, 7 * Math.max(1, streak));
};

export const BUCKET = { soon: 'soon', later: 'later', muchLater: 'muchLater', new: 'new' };

export const bucketFor = (entry, now = Date.now()) => {
  if (!entry || !entry.nextReviewAt) return BUCKET.new;
  const days = (entry.nextReviewAt - now) / DAY;
  if (days <= 1) return BUCKET.soon;
  if (days <= 7) return BUCKET.later;
  return BUCKET.muchLater;
};

export const loadProgress = () => {
  const data = readJSON(PROGRESS_KEY, {});
  return data && typeof data === 'object' ? data : {};
};

export const clearProgress = () => removeKey(PROGRESS_KEY);

/**
 * Records (or replaces) one attempt. `attemptId` makes re-rating the same
 * answer idempotent instead of counting twice.
 */
export const recordAttempt = ({ attemptId, questionId, sectionId, rating, coverage, confidence, at = Date.now() }) => {
  if (!RATING_SCORE[rating] && RATING_SCORE[rating] !== 0) return loadProgress();
  const data = loadProgress();
  const entry = data[questionId] ?? { questionId, sectionId, attempts: [] };
  entry.sectionId = sectionId ?? entry.sectionId;
  entry.attempts = entry.attempts.filter((a) => a.id !== attemptId);
  entry.attempts.push({ id: attemptId, rating, coverage: coverage ?? null, confidence: confidence ?? null, at });
  entry.attempts.sort((a, b) => a.at - b.at);
  if (entry.attempts.length > 20) entry.attempts = entry.attempts.slice(-20);

  // Streak of consecutive "correct" from the end.
  let streak = 0;
  for (let i = entry.attempts.length - 1; i >= 0 && entry.attempts[i].rating === 'correct'; i--) streak++;
  const last = entry.attempts[entry.attempts.length - 1];
  entry.lastAt = last.at;
  entry.lastRating = last.rating;
  entry.streak = streak;
  entry.nextReviewAt = last.at + intervalFor(last.rating, streak) * DAY;

  data[questionId] = entry;
  writeJSON(PROGRESS_KEY, data);
  return data;
};

const scoreOf = (entry) => {
  if (!entry?.attempts?.length) return null;
  // Recent attempts matter more.
  const recent = entry.attempts.slice(-5);
  return recent.reduce((s, a) => s + RATING_SCORE[a.rating], 0) / recent.length;
};

/**
 * Weight for the planner: due questions and weak ones come up more often,
 * mastered ones less. Never zero so nothing is excluded forever.
 */
export const planWeight = (data, questionId, now = Date.now()) => {
  const entry = data[questionId];
  if (!entry) return 1;
  const score = scoreOf(entry) ?? 0.5;
  const due = entry.nextReviewAt <= now;
  if (due) return 1.4 + (1 - score);
  return 0.25 + (1 - score) * 0.5;
};

/**
 * @param {object} data     loadProgress()
 * @param {Array}  questions allQuestions
 * @param {object} sessionsInfo { count }
 */
export const computeStats = (data, questions, { now = Date.now() } = {}) => {
  const byId = new Map(questions.map((q) => [q.id, q]));
  const entries = Object.values(data).filter((e) => byId.has(e.questionId));
  const attempts = entries.flatMap((e) => e.attempts.map((a) => ({ ...a, questionId: e.questionId, sectionId: e.sectionId })));
  attempts.sort((a, b) => a.at - b.at);

  const byCategory = {};
  for (const e of entries) {
    const cat = (byCategory[e.sectionId] ??= { sectionId: e.sectionId, questions: 0, attempts: 0, correct: 0, partial: 0, incorrect: 0, scoreSum: 0 });
    cat.questions++;
    for (const a of e.attempts) {
      cat.attempts++;
      cat[a.rating]++;
    }
    cat.scoreSum += scoreOf(e) ?? 0;
  }
  const categories = Object.values(byCategory).map((c) => ({ ...c, score: c.questions ? c.scoreSum / c.questions : 0 }));

  const ranked = [...categories].filter((c) => c.attempts >= 2).sort((a, b) => a.score - b.score);
  const weak = ranked.filter((c) => c.score < 0.6).slice(0, 5);
  const strong = [...ranked].reverse().filter((c) => c.score >= 0.75).slice(0, 5);

  // Readiness: recent accuracy (last 40 attempts) blended with breadth of
  // practice. It's a practice metric, not a prediction.
  const recent = attempts.slice(-40);
  const accuracy = recent.length ? recent.reduce((s, a) => s + RATING_SCORE[a.rating], 0) / recent.length : 0;
  const breadth = Math.min(1, entries.length / 40);
  const readiness = recent.length ? Math.round((accuracy * 0.7 + breadth * 0.3) * 100) : 0;

  const withConfidence = attempts.filter((a) => a.confidence != null);
  const confidence = withConfidence.length
    ? {
        avg: withConfidence.reduce((s, a) => s + a.confidence, 0) / withConfidence.length,
        // Over-confident: high confidence but rated incorrect.
        overconfident: withConfidence.filter((a) => a.confidence >= 4 && a.rating === 'incorrect').length,
        underconfident: withConfidence.filter((a) => a.confidence <= 2 && a.rating === 'correct').length,
      }
    : null;

  const due = entries
    .map((e) => ({ questionId: e.questionId, sectionId: e.sectionId, bucket: bucketFor(e, now), nextReviewAt: e.nextReviewAt, lastRating: e.lastRating }))
    .sort((a, b) => a.nextReviewAt - b.nextReviewAt);
  const buckets = {
    soon: due.filter((d) => d.bucket === BUCKET.soon),
    later: due.filter((d) => d.bucket === BUCKET.later),
    muchLater: due.filter((d) => d.bucket === BUCKET.muchLater),
  };

  return {
    totalAttempts: attempts.length,
    questionsPracticed: entries.length,
    lastPracticedAt: attempts.length ? attempts[attempts.length - 1].at : null,
    categories: categories.sort((a, b) => b.attempts - a.attempts),
    weak,
    strong,
    readiness,
    accuracy,
    confidence,
    buckets,
    dueNow: due.filter((d) => d.nextReviewAt <= now),
  };
};
