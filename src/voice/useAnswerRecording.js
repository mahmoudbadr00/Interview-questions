// voice/useAnswerRecording.js
// Single entry point for answering by voice, so the rest of the app never
// talks to the recognizer directly.
import { FEATURES } from '../lib/features';
import { useSpeechRecognition } from './useSpeechRecognition';

/**
 * Returns the speech-to-text controller, or null when the feature is turned
 * off. Callers treat null as "no voice input available" and render only the
 * typed answer field. The underlying hook touches no microphone until
 * start() is called, so a disabled feature prompts for no permission.
 */
export const useAnswerRecording = (language) => {
  const stt = useSpeechRecognition(language);
  return FEATURES.voiceAnswerRecording ? stt : null;
};
