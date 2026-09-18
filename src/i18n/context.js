// i18n/context.js
// Context object + pure helpers. Kept free of components so that Fast Refresh
// (and the react-refresh lint rule) stay happy.
import { createContext } from 'react';
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  LANGUAGE_STORAGE_KEY,
  languageMeta,
  translations,
} from './translations';

export const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  dir: languageMeta[DEFAULT_LANGUAGE].dir,
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
  localize: (value) => value,
});

export const isSupportedLanguage = (value) => LANGUAGES.includes(value);

export const readStoredLanguage = () => {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isSupportedLanguage(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    // Private mode / storage disabled — fall back to the default language.
    return DEFAULT_LANGUAGE;
  }
};

export const persistLanguage = (language) => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Persistence is a nice-to-have; never break rendering over it.
  }
};

/**
 * Translate a UI key. Supports `{name}` placeholders:
 *   t('home.questionsCount', { count: 12 })
 */
export const createTranslator = (language) => (key, values) => {
  const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];
  // Optional singular form: `key.one` is used when `count` is exactly 1.
  const resolvedKey = values?.count === 1 && dictionary[`${key}.one`] ? `${key}.one` : key;
  const template = dictionary[resolvedKey] ?? translations[DEFAULT_LANGUAGE][resolvedKey] ?? key;
  if (!values) return template;
  return Object.keys(values).reduce(
    (text, name) => text.replaceAll(`{${name}}`, String(values[name])),
    template
  );
};

/**
 * Read a localized content value.
 * Accepts either a plain string (single-language content) or `{ ar, en }`.
 * Falls back to the other language rather than rendering nothing.
 */
export const createLocalizer = (language) => (value) => {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[language] || value[DEFAULT_LANGUAGE] || value.en || value.ar || '';
};
