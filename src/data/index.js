// data/index.js
// Assembles the bilingual question bank. Each category lives in its own file
// under ./categories so the content stays reviewable and easy to extend.
import { sections } from './sections.js';
import { javascript } from './categories/javascript.js';
import { typescript } from './categories/typescript.js';
import { react } from './categories/react.js';
import { nextjs } from './categories/nextjs.js';
import { stateManagement } from './categories/stateManagement.js';
import { htmlcss } from './categories/htmlcss.js';
import { web } from './categories/web.js';
import { testing } from './categories/testing.js';
import { nodejs } from './categories/nodejs.js';
import { reactNative } from './categories/reactNative.js';
import { flutter } from './categories/flutter.js';
import { matrialUI } from './categories/matrialUI.js';
import { dotnet } from './categories/dotnet.js';
import { java } from './categories/java.js';
import { php } from './categories/php.js';
import { python } from './categories/python.js';
import { ruby } from './categories/ruby.js';
import { angular } from './categories/angular.js';
import { vueJS } from './categories/vueJS.js';
import { kotlin } from './categories/kotlin.js';
import { database } from './categories/database.js';
import { laravel } from './categories/laravel.js';
import { uiux } from './categories/uiux.js';
import { softSkills } from './categories/softSkills.js';
import { systemDesign } from './categories/systemDesign.js';
import { debugging } from './categories/debugging.js';
import { coding } from './categories/coding.js';
import { enrich } from './enrichment/index.js';

export { sections };

const raw = {
  javascript,
  typescript,
  react,
  nextjs,
  stateManagement,
  htmlcss,
  web,
  testing,
  nodejs,
  reactNative,
  flutter,
  matrialUI,
  dotnet,
  java,
  php,
  python,
  ruby,
  angular,
  vueJS,
  kotlin,
  database,
  laravel,
  uiux,
  softSkills,
  systemDesign,
  debugging,
  coding,
};

/**
 * Question bank keyed by section id. Every question passes through `enrich`
 * so key points, follow-ups and depth are attached wherever they exist.
 */
export const faqData = Object.fromEntries(
  Object.entries(raw).map(([key, list]) => [key, list.map(enrich)])
);

/** Flat list of every question with its section id attached. */
export const allQuestions = Object.entries(faqData).flatMap(([sectionId, list]) =>
  list.map((q) => ({ ...q, sectionId }))
);

const byId = new Map(allQuestions.map((q) => [q.id, q]));

/** Look up a question (with sectionId) by id across all sections. */
export const findQuestion = (id) => byId.get(id);

/** Number of questions in a category, used by the home page. */
export const questionCount = (sectionId) => faqData[sectionId]?.length ?? 0;
