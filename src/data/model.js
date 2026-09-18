// data/model.js
// Shared vocabulary for the question bank. The project is plain JavaScript,
// so the shapes are documented here as JSDoc typedefs and enforced by
// scripts/validate-content.mjs rather than by a compiler.

/**
 * @typedef {{ ar: string, en: string }} Localized
 *
 * @typedef {Object} KeyPoint
 * @property {string} ar          Label shown to Arabic users.
 * @property {string} en          Label shown to English users.
 * @property {string[]} terms     Lower-case fragments (either language) whose
 *                                presence in an answer counts as covering the
 *                                point. Used by the deterministic comparison.
 *
 * @typedef {Object} FollowUp
 * @property {string} id
 * @property {Localized} question
 * @property {Localized} answer
 * @property {KeyPoint[]} [keyPoints]
 *
 * @typedef {Object} Alternative     One of several strong answers (soft skills).
 * @property {Localized} label       e.g. "Concise professional answer"
 * @property {Localized} answer
 * @property {Localized} why         Why this approach works / what it shows.
 * @property {Localized} [avoid]     What to steer clear of.
 *
 * @typedef {Object} Question
 * @property {string} id
 * @property {'beginner'|'intermediate'|'advanced'} difficulty
 * @property {Localized} question
 * @property {Localized} answer
 * @property {'concept'|'scenario'|'debug'|'coding'|'behavioral'|'tradeoff'|'design'} [kind]
 * @property {'know'|'explain'|'apply'|'debug'|'design'} [depth]
 * @property {string} [code]         Snippet shown before the question (debugging / coding).
 * @property {KeyPoint[]} [keyPoints]
 * @property {FollowUp[]} [followUps]
 * @property {Alternative[]} [alternatives]
 * @property {boolean} [star]        Behavioral question that suits the STAR structure.
 * @property {string[]} [tags]
 */

export const QUESTION_KIND = {
  concept: 'concept',
  scenario: 'scenario',
  debug: 'debug',
  coding: 'coding',
  behavioral: 'behavioral',
  tradeoff: 'tradeoff',
  design: 'design',
};

export const DEPTH = {
  know: 'know',
  explain: 'explain',
  apply: 'apply',
  debug: 'debug',
  design: 'design',
};

export const DEPTH_ORDER = [DEPTH.know, DEPTH.explain, DEPTH.apply, DEPTH.debug, DEPTH.design];

/** Default depth when a question does not declare one. */
export const depthForDifficulty = (difficulty) =>
  ({ beginner: DEPTH.know, intermediate: DEPTH.explain, advanced: DEPTH.apply })[difficulty] ??
  DEPTH.know;
