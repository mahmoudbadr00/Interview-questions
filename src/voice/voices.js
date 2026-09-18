// voice/voices.js
// Voice discovery for the Web Speech API. Voices can load asynchronously
// (Chrome fires `voiceschanged`), so callers await `loadVoices()` once and
// then pick per language synchronously.
import { localeFor } from './support';

const VOICE_LOAD_TIMEOUT_MS = 1500;

let voicesPromise = null;

/**
 * Resolves with the voice list, waiting for `voiceschanged` if the list is
 * still empty. Never rejects; an empty array means "use the engine default".
 */
export const loadVoices = (synth) => {
  if (!synth) return Promise.resolve([]);
  const now = synth.getVoices?.() ?? [];
  if (now.length) return Promise.resolve(now);
  if (voicesPromise) return voicesPromise;

  voicesPromise = new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      if (typeof synth.removeEventListener === 'function') synth.removeEventListener('voiceschanged', finish);
      voicesPromise = null;
      resolve(synth.getVoices?.() ?? []);
    };
    const timer = setTimeout(finish, VOICE_LOAD_TIMEOUT_MS);
    if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', finish);
    else synth.onvoiceschanged = finish;
  });
  return voicesPromise;
};

/**
 * Best available voice for a language ('ar' | 'en'). Exact locale first, then
 * any voice of that language (preferring the platform default / local one),
 * otherwise null so the utterance's `lang` alone drives the engine.
 */
export const getVoiceForLanguage = (language, voices) => {
  if (!Array.isArray(voices) || !voices.length) return null;
  const locale = localeFor(language).toLowerCase();
  const prefix = locale.split('-')[0];
  const norm = (v) => (v.lang ?? '').toLowerCase().replace('_', '-');
  const exact = voices.filter((v) => norm(v) === locale);
  const sameLanguage = voices.filter((v) => norm(v).startsWith(prefix));
  const rank = (list) => [...list].sort((a, b) => Number(Boolean(b.default)) - Number(Boolean(a.default)) || Number(Boolean(b.localService)) - Number(Boolean(a.localService)));
  return rank(exact)[0] ?? rank(sameLanguage)[0] ?? null;
};
