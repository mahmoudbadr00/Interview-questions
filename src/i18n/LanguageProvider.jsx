// i18n/LanguageProvider.jsx
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  LanguageContext,
  createLocalizer,
  createTranslator,
  isSupportedLanguage,
  persistLanguage,
  readStoredLanguage,
} from './context';
import { DEFAULT_LANGUAGE, languageMeta, translations } from './translations';

const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(readStoredLanguage);
  const dir = languageMeta[language].dir;

  // Keep the document in sync so that `dir`/`lang` driven CSS, screen readers
  // and native form controls all behave correctly.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', dir);
    document.title = translations[language]['app.documentTitle'];
  }, [language, dir]);

  const setLanguage = useCallback((next) => {
    const value = isSupportedLanguage(next) ? next : DEFAULT_LANGUAGE;
    setLanguageState(value);
    persistLanguage(value);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'ar' ? 'en' : 'ar';
      persistLanguage(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      language,
      dir,
      setLanguage,
      toggleLanguage,
      t: createTranslator(language),
      localize: createLocalizer(language),
    }),
    [language, dir, setLanguage, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
