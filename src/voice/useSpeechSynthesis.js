// voice/useSpeechSynthesis.js
// Text-to-speech with explicit play / pause / resume / stop / replay.
//
// Arabic interviews contain Latin technical terms ("useState", "Next.js").
// A single Arabic utterance mispronounces those, so for Arabic the text is
// split into Arabic / English runs and queued as consecutive utterances, each
// with its own `lang` and voice. English interviews stay one utterance.
// Speech is always cancelled when the component unmounts.
import { useCallback, useEffect, useRef, useState } from 'react';
import { getSpeechSynthesis, localeFor } from './support';
import { detectLanguageSegments } from './segments';
import { getVoiceForLanguage, loadVoices } from './voices';

export const TTS_STATUS = { idle: 'idle', speaking: 'speaking', paused: 'paused' };

const RATE = 0.95;

/** Plan the utterances for a prompt in the given interview language. */
export const planUtterances = (text, language) => {
  if (language !== 'ar') return [{ lang: 'en', text }];
  const segments = detectLanguageSegments(text);
  return segments.length ? segments : [{ lang: 'ar', text }];
};

export const useSpeechSynthesis = (language) => {
  const synth = getSpeechSynthesis();
  const supported = synth !== null;
  const [status, setStatus] = useState(TTS_STATUS.idle);
  const lastTextRef = useRef('');
  // Incremented on every speak()/stop() so callbacks from a cancelled queue
  // cannot flip the status of a newer one.
  const runRef = useRef(0);

  const stop = useCallback(() => {
    if (!synth) return;
    runRef.current += 1;
    synth.cancel();
    setStatus(TTS_STATUS.idle);
  }, [synth]);

  const speak = useCallback(
    (text) => {
      if (!synth || !text) return;
      runRef.current += 1;
      const run = runRef.current;
      synth.cancel();
      lastTextRef.current = text;
      setStatus(TTS_STATUS.speaking);

      const plan = planUtterances(text, language);

      // Voices may still be loading; pick them once, then enqueue everything
      // in order. speechSynthesis itself plays the queue sequentially, so
      // pause / resume / cancel apply to the whole sentence.
      loadVoices(synth).then((voices) => {
        if (run !== runRef.current) return; // superseded by stop()/speak()
        const voiceFor = { ar: getVoiceForLanguage('ar', voices), en: getVoiceForLanguage('en', voices) };
        const last = plan.length - 1;

        plan.forEach((segment, index) => {
          const utterance = new window.SpeechSynthesisUtterance(segment.text);
          utterance.lang = localeFor(segment.lang);
          const voice = voiceFor[segment.lang];
          if (voice) utterance.voice = voice;
          utterance.rate = RATE;
          const alive = () => run === runRef.current;
          utterance.onstart = () => alive() && setStatus(TTS_STATUS.speaking);
          utterance.onpause = () => alive() && setStatus(TTS_STATUS.paused);
          utterance.onresume = () => alive() && setStatus(TTS_STATUS.speaking);
          if (index === last) {
            utterance.onend = () => alive() && setStatus(TTS_STATUS.idle);
          }
          // An engine hiccup on one segment should not strand the status;
          // the queue continues with the next segment on its own.
          utterance.onerror = () => {
            if (alive() && index === last) setStatus(TTS_STATUS.idle);
          };
          synth.speak(utterance);
        });
      });
    },
    [synth, language]
  );

  const pause = useCallback(() => {
    if (!synth || !synth.speaking) return;
    synth.pause();
    setStatus(TTS_STATUS.paused);
  }, [synth]);

  const resume = useCallback(() => {
    if (!synth) return;
    synth.resume();
    setStatus(TTS_STATUS.speaking);
  }, [synth]);

  const replay = useCallback(() => {
    if (lastTextRef.current) speak(lastTextRef.current);
  }, [speak]);

  // Never leave a voice talking after navigation.
  useEffect(() => () => synth?.cancel(), [synth]);

  return { supported, status, speak, pause, resume, stop, replay };
};
