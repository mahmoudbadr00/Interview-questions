// voice/useSpeechRecognition.js
// Speech-to-text with explicit, user-controlled start / stop. The recognizer
// is aborted on unmount so the microphone is never left open.
import { useCallback, useEffect, useRef, useState } from 'react';
import { getSpeechRecognitionCtor, localeFor } from './support';

export const STT_STATUS = {
  inactive: 'inactive',
  requesting: 'requesting', // start() called, waiting for permission / audio start
  recording: 'recording',
  processing: 'processing', // stop() called, waiting for final results
  ready: 'ready', // transcript available
  error: 'error',
};

export const useSpeechRecognition = (language) => {
  const Ctor = getSpeechRecognitionCtor();
  const supported = Ctor !== null;
  const [status, setStatus] = useState(STT_STATUS.inactive);
  const [transcript, setTranscript] = useState('');
  const [interim, setInterim] = useState('');
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);
  const finalRef = useRef('');
  const stoppingRef = useRef(false);

  const teardown = useCallback(() => {
    const rec = recognitionRef.current;
    if (rec) {
      rec.onresult = null;
      rec.onerror = null;
      rec.onend = null;
      rec.onstart = null;
      rec.onaudiostart = null;
      try {
        rec.abort();
      } catch {
        // already stopped
      }
      recognitionRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (!Ctor || recognitionRef.current) return;
    setError(null);
    setInterim('');
    stoppingRef.current = false;
    const rec = new Ctor();
    rec.lang = localeFor(language);
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    rec.onstart = () => setStatus(STT_STATUS.requesting);
    rec.onaudiostart = () => setStatus(STT_STATUS.recording);
    rec.onresult = (event) => {
      let interimText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const text = result[0]?.transcript ?? '';
        if (result.isFinal) finalRef.current = `${finalRef.current} ${text}`.trim();
        else interimText += text;
      }
      setTranscript(finalRef.current);
      setInterim(interimText);
      if (!stoppingRef.current) setStatus(STT_STATUS.recording);
    };
    rec.onerror = (event) => {
      // 'aborted' / 'no-speech' are not failures worth alarming the user with.
      if (event.error === 'aborted') return;
      if (event.error === 'no-speech') {
        setError('noSpeech');
        return;
      }
      setError(event.error === 'not-allowed' || event.error === 'service-not-allowed' ? 'notAllowed' : 'generic');
      setStatus(STT_STATUS.error);
    };
    rec.onend = () => {
      recognitionRef.current = null;
      setInterim('');
      setStatus((prev) => (prev === STT_STATUS.error ? prev : finalRef.current ? STT_STATUS.ready : STT_STATUS.inactive));
    };

    recognitionRef.current = rec;
    setStatus(STT_STATUS.requesting);
    try {
      rec.start();
    } catch {
      recognitionRef.current = null;
      setError('generic');
      setStatus(STT_STATUS.error);
    }
  }, [Ctor, language]);

  const stop = useCallback(() => {
    const rec = recognitionRef.current;
    if (!rec) return;
    stoppingRef.current = true;
    setStatus(STT_STATUS.processing);
    try {
      rec.stop(); // lets pending results flush, then fires onend
    } catch {
      teardown();
      setStatus(finalRef.current ? STT_STATUS.ready : STT_STATUS.inactive);
    }
  }, [teardown]);

  const reset = useCallback(() => {
    teardown();
    finalRef.current = '';
    setTranscript('');
    setInterim('');
    setError(null);
    setStatus(STT_STATUS.inactive);
  }, [teardown]);

  // Release the microphone if the component goes away mid-recording.
  useEffect(() => teardown, [teardown]);

  return {
    supported,
    status,
    isRecording: status === STT_STATUS.recording || status === STT_STATUS.requesting,
    transcript,
    interim,
    error,
    start,
    stop,
    reset,
  };
};
