// interview/config.js
// Everything the setup screen can choose from, plus presets. Pure data.
import { sections, SOFT_SKILL_SECTIONS } from '../data/sections.js';
import { FEATURES } from '../lib/features.js';

export const INTERVIEW_TYPE = {
  technical: 'technical',
  softSkills: 'softSkills',
  mixed: 'mixed',
  custom: 'custom',
};

export const QUESTION_MODE = {
  questionsOnly: 'questionsOnly',
  withFollowUps: 'withFollowUps',
  full: 'full',
};

export const COMPARE_MODE = {
  immediate: 'immediate',
  after: 'after',
};

/** How each question is presented to the candidate. */
export const PRESENTATION = {
  text: 'text',
  voice: 'voice',
  both: 'both',
};

export const DIFFICULTY_CHOICE = ['beginner', 'intermediate', 'advanced', 'mixed'];
export const QUESTION_COUNTS = [5, 10, 15, 20];
export const DURATIONS_MINUTES = [10, 15, 20, 30, 45, 60];
export const MIN_QUESTIONS = 3;
export const MAX_QUESTIONS = 40;

export const SELF_RATING = {
  correct: 'correct',
  partial: 'partial',
  incorrect: 'incorrect',
};

export const TECHNICAL_SECTION_IDS = sections
  .map((s) => s.id)
  .filter((id) => !SOFT_SKILL_SECTIONS.includes(id));

export const SOFT_SKILL_SECTION_IDS = [...SOFT_SKILL_SECTIONS];

/** Categories that are actually used for a given interview type. */
export const categoriesForType = (type, custom = []) => {
  switch (type) {
    case INTERVIEW_TYPE.softSkills:
      return SOFT_SKILL_SECTION_IDS;
    case INTERVIEW_TYPE.mixed:
      return [...custom.filter((id) => TECHNICAL_SECTION_IDS.includes(id)), ...SOFT_SKILL_SECTION_IDS];
    case INTERVIEW_TYPE.custom:
      return custom;
    case INTERVIEW_TYPE.technical:
    default:
      return custom.filter((id) => TECHNICAL_SECTION_IDS.includes(id));
  }
};

export const DEFAULT_CONFIG = {
  type: INTERVIEW_TYPE.technical,
  categories: ['javascript', 'react'],
  difficulty: 'mixed',
  language: null, // null → follow the UI language
  questionCount: 10,
  durationMinutes: 20,
  questionMode: QUESTION_MODE.withFollowUps,
  compareMode: COMPARE_MODE.after,
  presentation: PRESENTATION.text,
  speakingPractice: false,
  questionIds: null, // set by "practice due questions"; overrides selection
};

/**
 * Presets are partial configs merged over DEFAULT_CONFIG. Labels live in the
 * translations under `interview.preset.<id>`.
 */
export const PRESETS = [
  {
    id: 'quickJs',
    config: { type: 'technical', categories: ['javascript'], questionCount: 5, durationMinutes: 10, questionMode: 'questionsOnly', compareMode: 'immediate' },
  },
  {
    id: 'frontendMock',
    config: { type: 'technical', categories: ['javascript', 'react', 'nextjs', 'typescript', 'web'], questionCount: 15, durationMinutes: 30, questionMode: 'full' },
  },
  {
    id: 'nodeBackend',
    config: { type: 'technical', categories: ['nodejs', 'database'], questionCount: 10, durationMinutes: 20, questionMode: 'withFollowUps' },
  },
  {
    id: 'behavioral',
    config: { type: 'softSkills', categories: [], questionCount: 8, durationMinutes: 20, questionMode: 'questionsOnly', compareMode: 'after' },
  },
  {
    id: 'fullMixed',
    config: { type: 'mixed', categories: ['javascript', 'react', 'nodejs'], questionCount: 20, durationMinutes: 45, questionMode: 'full' },
  },
  {
    id: 'systemDesign',
    config: { type: 'technical', categories: ['systemDesign'], difficulty: 'mixed', questionCount: 5, durationMinutes: 30, questionMode: 'questionsOnly' },
  },
  {
    id: 'debugging',
    config: { type: 'technical', categories: ['debugging', 'coding'], questionCount: 8, durationMinutes: 30, questionMode: 'questionsOnly', compareMode: 'immediate' },
  },
  {
    id: 'speaking',
    config: { type: 'mixed', categories: ['javascript', 'react'], questionCount: 8, durationMinutes: 20, questionMode: 'questionsOnly', compareMode: 'immediate', presentation: 'both', speakingPractice: true },
  },
];

/**
 * Presets offered by this build. A preset whose value depends on answering by
 * voice is hidden while that feature is off, rather than shipping a preset
 * that cannot deliver what its description promises.
 */
export const AVAILABLE_PRESETS = PRESETS.filter(
  (preset) => FEATURES.voiceAnswerRecording || !preset.config.speakingPractice
);

export const applyPreset = (presetId) => {
  const preset = PRESETS.find((p) => p.id === presetId);
  return preset ? { ...DEFAULT_CONFIG, ...preset.config } : { ...DEFAULT_CONFIG };
};

/** Normalises a config so the planner never sees impossible combinations. */
export const sanitizeConfig = (input) => {
  const config = { ...DEFAULT_CONFIG, ...input };
  config.categories = categoriesForType(config.type, config.categories ?? []);
  if (!DIFFICULTY_CHOICE.includes(config.difficulty)) config.difficulty = 'mixed';
  config.questionCount = Math.min(MAX_QUESTIONS, Math.max(MIN_QUESTIONS, Number(config.questionCount) || 10));
  config.durationMinutes = Math.min(120, Math.max(5, Number(config.durationMinutes) || 20));
  if (!Object.values(QUESTION_MODE).includes(config.questionMode)) config.questionMode = QUESTION_MODE.withFollowUps;
  if (!Object.values(COMPARE_MODE).includes(config.compareMode)) config.compareMode = COMPARE_MODE.after;
  if (!Object.values(PRESENTATION).includes(config.presentation)) config.presentation = PRESENTATION.text;
  if (config.language !== 'ar' && config.language !== 'en') config.language = null;
  // Speaking practice asks the candidate to answer out loud, which only makes
  // sense while voice answering exists.
  if (!FEATURES.voiceAnswerRecording) config.speakingPractice = false;
  return config;
};
