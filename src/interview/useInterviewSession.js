// interview/useInterviewSession.js
// React binding for the session reducer. The active session is persisted on
// every change; a finished one is moved to history.
import { useCallback, useEffect, useState } from 'react';
import {
  SESSION_STATUS,
  clearCurrent,
  createSession,
  loadCurrent,
  reducer,
  saveCurrent,
  saveToHistory,
} from './session';

export const useInterviewSession = () => {
  const [session, setSession] = useState(loadCurrent);

  useEffect(() => {
    if (!session) return;
    if (session.status === SESSION_STATUS.active) {
      saveCurrent(session);
    } else {
      saveToHistory(session);
      clearCurrent();
    }
  }, [session]);

  const dispatch = useCallback((action) => setSession((prev) => reducer(prev, action)), []);

  const start = useCallback((config, plan, language) => {
    const next = createSession(config, plan, language);
    saveCurrent(next);
    setSession(next);
    return next;
  }, []);

  const discard = useCallback(() => {
    clearCurrent();
    setSession(null);
  }, []);

  return { session, dispatch, start, discard };
};
