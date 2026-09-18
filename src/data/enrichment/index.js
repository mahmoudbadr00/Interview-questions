// data/enrichment/index.js
// Merges key points, follow-ups and depth into the question bank by id.
import { javascriptEnrichment } from './javascript.js';
import { reactEnrichment } from './react.js';
import { nextjsEnrichment } from './nextjs.js';
import { typescriptEnrichment } from './typescript.js';
import { nodejsEnrichment } from './nodejs.js';
import { webEnrichment } from './web.js';

export const enrichment = {
  ...javascriptEnrichment,
  ...reactEnrichment,
  ...nextjsEnrichment,
  ...typescriptEnrichment,
  ...nodejsEnrichment,
  ...webEnrichment,
};

/**
 * Returns a copy of the question with any enrichment fields applied.
 * Fields declared inline on the question take precedence.
 */
export const enrich = (question) => {
  const extra = enrichment[question.id];
  return extra ? { ...extra, ...question } : question;
};
