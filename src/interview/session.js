// interview/session.js
// Session state machine + persistence. Pure functions so it can be tested
// and reasoned about without React.
import { readJSON, writeJSON, removeKey, uid } from '../lib/storage.js';
import { compareAnswer } from './compare.js';

export const CURRENT_KEY = 'interview.current';
export const HISTORY_KEY = 'interview.history';
const HISTORY_LIMIT = 30;

export const SESSION_STATUS = {
  active: 'active',
  finished: 'finished',
};

export const FINISH_REASON = {
  completed: 'completed',
  timeUp: 'timeUp',
  endedEarly: 'endedEarly',
};

export const createSession = (config, plan, language) => {
  const now = Date.now();
  return {
    id: uid(),
    status: SESSION_STATUS.active,
    language,
    config,
    steps: plan.steps,
    questionCount: plan.questionCount,
    index: 0,
    answers: {},
    startedAt: now,
    finishedAt: null,
    finishReason: null,
    durationMs: config.durationMinutes * 60 * 1000,
  };
};

export const remainingMs = (session, now = Date.now()) => {
  if (!session) return 0;
  const end = session.startedAt + session.durationMs;
  return Math.max(0, end - now);
};

export const elapsedMs = (session, now = Date.now()) =>
  Math.max(0, (session.finishedAt ?? now) - session.startedAt);

export const currentStep = (session) => session?.steps[session.index] ?? null;

export const progressOf = (session) => {
  const answered = Object.values(session.answers).filter((a) => !a.skipped).length;
  const skipped = Object.values(session.answers).filter((a) => a.skipped).length;
  return { answered, skipped, total: session.steps.length, position: session.index + 1 };
};

const ACTIONS = {
  answer: 'answer',
  skip: 'skip',
  rate: 'rate',
  next: 'next',
  finish: 'finish',
};
export { ACTIONS };

export const reducer = (session, action) => {
  if (!session) return session;
  switch (action.type) {
    case ACTIONS.answer: {
      const { stepId, text, inputMode, keyPoints } = action;
      const comparison = compareAnswer(text, keyPoints);
      return {
        ...session,
        answers: {
          ...session.answers,
          [stepId]: {
            ...(session.answers[stepId] ?? {}),
            text,
            inputMode,
            skipped: false,
            submittedAt: Date.now(),
            comparison,
          },
        },
      };
    }
    case ACTIONS.skip: {
      const { stepId } = action;
      return {
        ...session,
        answers: {
          ...session.answers,
          [stepId]: { ...(session.answers[stepId] ?? {}), text: '', skipped: true, submittedAt: Date.now(), comparison: null },
        },
      };
    }
    case ACTIONS.rate: {
      const { stepId, rating, confidence } = action;
      const prev = session.answers[stepId] ?? { text: '', skipped: true };
      return {
        ...session,
        answers: {
          ...session.answers,
          [stepId]: {
            ...prev,
            rating: rating ?? prev.rating ?? null,
            confidence: confidence ?? prev.confidence ?? null,
            ratedAt: Date.now(),
          },
        },
      };
    }
    case ACTIONS.next: {
      const nextIndex = session.index + 1;
      if (nextIndex >= session.steps.length) {
        return finish(session, FINISH_REASON.completed);
      }
      return { ...session, index: nextIndex };
    }
    case ACTIONS.finish:
      return finish(session, action.reason ?? FINISH_REASON.endedEarly);
    default:
      return session;
  }
};

const finish = (session, reason) => {
  if (session.status === SESSION_STATUS.finished) return session;
  return { ...session, status: SESSION_STATUS.finished, finishedAt: Date.now(), finishReason: reason };
};

// ----------------------------------------------------------------- storage

export const loadCurrent = () => {
  const session = readJSON(CURRENT_KEY, null);
  return session && session.status === SESSION_STATUS.active && Array.isArray(session.steps) ? session : null;
};

export const saveCurrent = (session) => writeJSON(CURRENT_KEY, session);
export const clearCurrent = () => removeKey(CURRENT_KEY);

export const loadHistory = () => {
  const list = readJSON(HISTORY_KEY, []);
  return Array.isArray(list) ? list : [];
};

export const saveToHistory = (session) => {
  const list = loadHistory().filter((s) => s.id !== session.id);
  list.unshift(session);
  writeJSON(HISTORY_KEY, list.slice(0, HISTORY_LIMIT));
};

export const findSession = (id) => loadHistory().find((s) => s.id === id) ?? null;

export const updateInHistory = (id, updater) => {
  const list = loadHistory();
  const index = list.findIndex((s) => s.id === id);
  if (index === -1) return null;
  const updated = updater(list[index]);
  list[index] = updated;
  writeJSON(HISTORY_KEY, list);
  return updated;
};

export const clearHistory = () => removeKey(HISTORY_KEY);

/** Summary numbers for a finished session (used by review + progress). */
export const summarize = (session) => {
  const answers = Object.values(session.answers ?? {});
  const answered = answers.filter((a) => !a.skipped);
  const rated = answered.filter((a) => a.rating);
  const counts = { correct: 0, partial: 0, incorrect: 0 };
  for (const a of rated) counts[a.rating] = (counts[a.rating] ?? 0) + 1;
  const withComparison = answered.filter((a) => a.comparison && a.comparison.total > 0);
  const avgCoverage = withComparison.length
    ? withComparison.reduce((s, a) => s + a.comparison.coverage, 0) / withComparison.length
    : null;
  return {
    total: session.steps.length,
    answered: answered.length,
    skipped: answers.filter((a) => a.skipped).length,
    unanswered: session.steps.length - answers.length,
    rated: rated.length,
    counts,
    avgCoverage,
    elapsedMs: elapsedMs(session),
  };
};
