// voice/segments.js
// Splits mixed Arabic / Latin text into runs that should be spoken by
// different voices. Pure function, no DOM. Only the text handed to the
// speech engine is segmented — displayed content is never touched.

const ARABIC = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-ﻼ]/;
const LATIN = /[A-Za-zÀ-ɏ]/;
const ALNUM = /[\p{L}\p{N}]/u;

const scriptOf = (ch) => (ARABIC.test(ch) ? 'ar' : LATIN.test(ch) ? 'en' : null);

/**
 * @param {string} text
 * @returns {Array<{ lang: 'ar'|'en', text: string }>}
 *
 * Rules:
 * - A run keeps going while characters are the same script.
 * - Digits, punctuation and whitespace never start a run; they attach to the
 *   run in progress, so "Next.js 15", "Promise.all()", "O(n)" and
 *   "localhost:3000" stay together as one English segment.
 * - Runs without any letter or digit (e.g. a lone "؟") are dropped — there is
 *   nothing to pronounce and a separate utterance would only add a pause.
 */
export const detectLanguageSegments = (text) => {
  const segments = [];
  let current = null; // { lang, text }
  let pending = ''; // neutral characters seen before the first run

  for (const ch of String(text ?? '')) {
    const script = scriptOf(ch);
    if (!script) {
      if (current) current.text += ch;
      else pending += ch;
      continue;
    }
    if (current && current.lang === script) {
      current.text += ch;
      continue;
    }
    if (current) segments.push(current);
    current = { lang: script, text: pending + ch };
    pending = '';
  }
  if (current) segments.push(current);
  else if (pending) segments.push({ lang: 'ar', text: pending });

  return segments
    .map((s) => ({ lang: s.lang, text: s.text.trim() }))
    .filter((s) => ALNUM.test(s.text));
};

/** True when the text contains both Arabic and Latin letters. */
export const isMixedScript = (text) => ARABIC.test(text) && LATIN.test(text);
