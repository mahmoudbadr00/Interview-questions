// i18n/useLanguage.js
import { useContext } from 'react';
import { LanguageContext } from './context';

export const useLanguage = () => useContext(LanguageContext);
