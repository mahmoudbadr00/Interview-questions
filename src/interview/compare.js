// interview/compare.js
// Deterministic answer comparison. This is keyword / key-point coverage, not
// semantic evaluation — the UI must always label it as a heuristic and pair
// it with the candidate's own self-assessment.

const ARABIC_DIACRITICS = /[ً-ٰٟـ]/g;

/** Lower-case, strip Arabic diacritics/tatweel, unify alef/yaa/taa-marbuta. */
export const normalize = (text) =>
  String(text ?? '')
    .toLowerCase()
    .replace(ARABIC_DIACRITICS, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim();

const termMatches = (haystack, term) => {
  const needle = normalize(term);
  if (!needle) return false;
  return haystack.includes(needle);
};

export const wordCount = (text) => normalize(text).split(' ').filter(Boolean).length;

/**
 * @param {string} answer      candidate's answer (typed or transcript)
 * @param {Array}  keyPoints   [{ ar, en, terms: [] }]
 * @returns {{
 *   total: number, coveredCount: number, coverage: number,
 *   covered: Array, missing: Array, matchedTerms: Record<number, string>,
 *   words: number, tooShort: boolean, empty: boolean
 * }}
 */
export const compareAnswer = (answer, keyPoints = []) => {
  const haystack = ` ${normalize(answer)} `;
  const words = wordCount(answer);
  const covered = [];
  const missing = [];
  const matchedTerms = {};

  keyPoints.forEach((kp, index) => {
    const hit = (kp.terms ?? []).find((term) => termMatches(haystack, term));
    if (hit) {
      covered.push(kp);
      matchedTerms[index] = hit;
    } else {
      missing.push(kp);
    }
  });

  const total = keyPoints.length;
  return {
    total,
    coveredCount: covered.length,
    coverage: total ? covered.length / total : 0,
    covered,
    missing,
    matchedTerms,
    words,
    empty: words === 0,
    tooShort: words > 0 && words < 12,
  };
};

/**
 * A coarse, honest band for the coverage number. Bands, not scores — a
 * candidate can cover every keyword and still be wrong.
 */
export const coverageBand = (comparison) => {
  if (comparison.empty) return 'empty';
  if (comparison.total === 0) return 'noKeyPoints';
  if (comparison.coverage >= 0.75) return 'high';
  if (comparison.coverage >= 0.4) return 'medium';
  return 'low';
};

/**
 * Picks which improvement hint to show. Returns a translation key suffix.
 */
export const suggestionFor = (comparison, { isBehavioral = false, star = false } = {}) => {
  if (comparison.empty) return 'empty';
  if (isBehavioral) {
    if (star && comparison.words < 60) return 'starDetail';
    if (comparison.missing.length) return 'behavioralStructure';
    return 'behavioralGood';
  }
  if (comparison.tooShort) return 'tooShort';
  if (comparison.total === 0) return 'noKeyPoints';
  if (comparison.coverage < 0.4) return 'reviewExpected';
  if (comparison.missing.length) return 'mentionMissing';
  return 'coveredAll';
};
