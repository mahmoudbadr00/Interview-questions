// lib/features.js
// Build-time feature flags. Each flag hides a complete, working feature
// behind a single boolean so it can be reintroduced without rebuilding it.

export const FEATURES = {
  /**
   * Answering an interview question with the microphone (speech-to-text).
   *
   * Disabled for the first public launch. While it is false the app never
   * requests microphone permission: the recognizer is only constructed
   * inside start(), and nothing can call start() because the controls are
   * not rendered.
   *
   * Setting this back to true restores, with no other change:
   *   - the record / stop controls and mic status indicator,
   *   - the interim transcript and recognition error messages,
   *   - the speaking-practice preset and toggle,
   *   - the typed / by-voice badge on a compared answer.
   *
   * It does NOT affect reading questions aloud (text-to-speech), which is a
   * separate feature and always available.
   */
  voiceAnswerRecording: false,
};
