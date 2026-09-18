// lib/storage.js
// Tiny localStorage wrapper. Everything the app persists goes through here so
// private-mode / quota failures never break rendering.

export const readJSON = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
};

export const writeJSON = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const removeKey = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
};

/** Short unique id — good enough for local session/attempt keys. */
export const uid = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
