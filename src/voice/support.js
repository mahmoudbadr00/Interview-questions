// voice/support.js
// Feature detection for the Web Speech API. Nothing here touches the mic.

export const getSpeechSynthesis = () =>
  typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function'
    ? window.speechSynthesis
    : null;

export const getSpeechRecognitionCtor = () =>
  typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition || null : null;

export const isSpeechSynthesisSupported = () => getSpeechSynthesis() !== null;
export const isSpeechRecognitionSupported = () => getSpeechRecognitionCtor() !== null;

/** BCP-47 tag for the recognizer / synthesizer. */
export const localeFor = (language) => (language === 'ar' ? 'ar-SA' : 'en-US');
