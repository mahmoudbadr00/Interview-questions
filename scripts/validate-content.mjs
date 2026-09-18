import { sections } from '../src/data/sections.js';
import { faqData } from '../src/data/index.js';
import { enrichment } from '../src/data/enrichment/index.js';
import { DIFFICULTY_ORDER } from '../src/data/difficulty.js';
import { QUESTION_KIND, DEPTH } from '../src/data/model.js';

let errors = 0;
const fail = (msg) => { console.error('ERROR: ' + msg); errors++; };

const KINDS = new Set(Object.values(QUESTION_KIND));
const DEPTHS = new Set(Object.values(DEPTH));

const ids = new Set();
const sectionIds = new Set(sections.map((s) => s.id));

for (const key of Object.keys(faqData)) {
  if (!sectionIds.has(key)) fail(`faqData key "${key}" has no matching section`);
}
for (const section of sections) {
  if (!faqData[section.id]) fail(`section "${section.id}" has no faqData entry`);
  if (!section.name?.ar || !section.name?.en) fail(`section "${section.id}" missing a localized name`);
}

const isLocalized = (v) =>
  v && typeof v.ar === 'string' && v.ar.trim() !== '' && typeof v.en === 'string' && v.en.trim() !== '';

const checkKeyPoints = (owner, keyPoints) => {
  if (!Array.isArray(keyPoints) || keyPoints.length === 0) return fail(`${owner}: keyPoints must be a non-empty array`);
  keyPoints.forEach((kp, i) => {
    if (!isLocalized(kp)) fail(`${owner}: keyPoints[${i}] missing ar/en label`);
    if (!Array.isArray(kp.terms) || kp.terms.length === 0) fail(`${owner}: keyPoints[${i}] has no terms`);
    else for (const term of kp.terms) {
      if (typeof term !== 'string' || term.trim() === '') fail(`${owner}: keyPoints[${i}] has an empty term`);
      else if (term !== term.toLowerCase()) fail(`${owner}: keyPoints[${i}] term "${term}" must be lower-case`);
    }
  });
};

let total = 0;
let withKeyPoints = 0;
let withFollowUps = 0;
let followUpCount = 0;
const byDifficulty = {};
const byKind = {};
const perCategory = {};

for (const [key, list] of Object.entries(faqData)) {
  perCategory[key] = { total: list.length };
  for (const q of list) {
    total++;
    if (!q.id) fail(`${key}: entry without an id`);
    if (ids.has(q.id)) fail(`duplicate id: ${q.id}`);
    ids.add(q.id);
    if (!DIFFICULTY_ORDER.includes(q.difficulty)) fail(`${q.id}: invalid difficulty "${q.difficulty}"`);
    for (const field of ['question', 'answer']) {
      for (const lang of ['ar', 'en']) {
        const value = q[field]?.[lang];
        if (typeof value !== 'string' || value.trim() === '') fail(`${q.id}: missing ${field}.${lang}`);
      }
    }

    // Optional interview fields.
    if (q.kind !== undefined && !KINDS.has(q.kind)) fail(`${q.id}: invalid kind "${q.kind}"`);
    if (q.depth !== undefined && !DEPTHS.has(q.depth)) fail(`${q.id}: invalid depth "${q.depth}"`);
    if (q.code !== undefined && (typeof q.code !== 'string' || q.code.trim() === '')) fail(`${q.id}: code must be a non-empty string`);
    if ((q.kind === 'debug' || q.kind === 'coding') && !q.code) fail(`${q.id}: ${q.kind} questions need a code snippet`);
    if (q.keyPoints !== undefined) { withKeyPoints++; checkKeyPoints(q.id, q.keyPoints); }
    if (q.followUps !== undefined) {
      if (!Array.isArray(q.followUps) || q.followUps.length === 0) fail(`${q.id}: followUps must be a non-empty array`);
      else {
        withFollowUps++;
        q.followUps.forEach((f, i) => {
          followUpCount++;
          if (!f.id) fail(`${q.id}: followUps[${i}] without an id`);
          else if (ids.has(f.id)) fail(`duplicate id (follow-up): ${f.id}`);
          else ids.add(f.id);
          if (!isLocalized(f.question)) fail(`${q.id}: followUps[${i}] missing question ar/en`);
          if (!isLocalized(f.answer)) fail(`${q.id}: followUps[${i}] missing answer ar/en`);
          if (f.keyPoints !== undefined) checkKeyPoints(`${q.id}/${f.id}`, f.keyPoints);
        });
      }
    }
    if (q.alternatives !== undefined) {
      if (!Array.isArray(q.alternatives) || q.alternatives.length < 2) fail(`${q.id}: alternatives should offer at least two answers`);
      else q.alternatives.forEach((a, i) => {
        if (!isLocalized(a.label)) fail(`${q.id}: alternatives[${i}] missing label ar/en`);
        if (!isLocalized(a.answer)) fail(`${q.id}: alternatives[${i}] missing answer ar/en`);
        if (!isLocalized(a.why)) fail(`${q.id}: alternatives[${i}] missing why ar/en`);
        if (a.avoid !== undefined && !isLocalized(a.avoid)) fail(`${q.id}: alternatives[${i}] avoid must be ar/en`);
      });
    }
    if (q.kind === 'behavioral' && !q.alternatives) fail(`${q.id}: behavioral questions must offer alternatives`);
    if (q.star !== undefined && typeof q.star !== 'boolean') fail(`${q.id}: star must be boolean`);
    if (q.tags !== undefined && (!Array.isArray(q.tags) || q.tags.some((t) => typeof t !== 'string'))) fail(`${q.id}: tags must be string[]`);

    byDifficulty[q.difficulty] = (byDifficulty[q.difficulty] ?? 0) + 1;
    const kind = q.kind ?? 'concept';
    byKind[kind] = (byKind[kind] ?? 0) + 1;
    perCategory[key][q.difficulty] = (perCategory[key][q.difficulty] ?? 0) + 1;
  }
}

// Enrichment entries that no longer match a question are silent dead weight.
for (const id of Object.keys(enrichment)) {
  if (!ids.has(id)) fail(`enrichment for unknown question id: ${id}`);
}

console.log('categories:', Object.keys(faqData).length);
console.log('total questions:', total);
console.log('by difficulty:', byDifficulty);
console.log('by kind:', byKind);
console.log(`with key points: ${withKeyPoints}   with follow-ups: ${withFollowUps} (${followUpCount} follow-up questions)`);
console.log('');
for (const [key, stats] of Object.entries(perCategory)) {
  console.log(
    key.padEnd(18) +
      String(stats.total).padStart(4) +
      '   b:' + String(stats.beginner ?? 0).padStart(3) +
      '  i:' + String(stats.intermediate ?? 0).padStart(3) +
      '  a:' + String(stats.advanced ?? 0).padStart(3)
  );
}
console.log('');
console.log(errors === 0 ? 'OK: no content errors' : `FAILED with ${errors} error(s)`);
process.exit(errors === 0 ? 0 : 1);
