// components/interview/AnswerInput.jsx
// Typed answer with optional, explicitly user-controlled voice input. The
// transcript is appended to the text field so the user can always edit it.
import { useEffect, useRef } from 'react';
import { Alert, Box, Button, Chip, Stack, TextField, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import { useLanguage } from '../../i18n/useLanguage';
import { STT_STATUS } from '../../voice/useSpeechRecognition';

const STATUS_COLOR = {
  [STT_STATUS.inactive]: 'default',
  [STT_STATUS.requesting]: 'warning',
  [STT_STATUS.recording]: 'error',
  [STT_STATUS.processing]: 'warning',
  [STT_STATUS.ready]: 'success',
  [STT_STATUS.error]: 'error',
};

const AnswerInput = ({ value, onChange, stt, disabled, onVoiceUsed, speakingPractice }) => {
  const { t, dir } = useLanguage();
  const valueRef = useRef(value);
  valueRef.current = value;

  // Once the recognizer finishes, merge the final transcript into the answer
  // and clear the recognizer so the next recording starts clean.
  const status = stt?.status;
  const transcript = stt?.transcript;
  const reset = stt?.reset;
  useEffect(() => {
    if (status === STT_STATUS.ready && transcript) {
      const current = valueRef.current;
      onChange(current ? `${current.trimEnd()} ${transcript}` : transcript);
      onVoiceUsed?.();
      reset?.();
    }
  }, [status, transcript, reset, onChange, onVoiceUsed]);

  const recording = stt?.status === STT_STATUS.recording || stt?.status === STT_STATUS.requesting;
  const busy = stt?.status === STT_STATUS.processing;

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, textAlign: 'start' }}>
        {t('session.yourAnswer')}
      </Typography>
      {speakingPractice ? (
        <Alert severity="info" sx={{ mb: 1.5, textAlign: 'start' }}>
          {t('session.speakingHint')}
        </Alert>
      ) : null}
      <TextField
        multiline
        minRows={5}
        maxRows={14}
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('session.answerPlaceholder')}
        disabled={disabled}
        inputProps={{ 'aria-label': t('session.yourAnswer'), dir }}
      />

      {stt ? (
        <Box sx={{ mt: 1.5 }}>
          {stt.supported ? (
            <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ gap: 1 }}>
              {!recording ? (
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<MicIcon />}
                  onClick={stt.start}
                  disabled={disabled || busy}
                  aria-pressed={false}
                >
                  {t('voice.startRecording')}
                </Button>
              ) : (
                <Button variant="contained" color="error" startIcon={<StopIcon />} onClick={stt.stop} aria-pressed>
                  {t('voice.stopRecording')}
                </Button>
              )}
              <Chip
                size="small"
                color={STATUS_COLOR[stt.status] ?? 'default'}
                variant={stt.status === STT_STATUS.recording ? 'filled' : 'outlined'}
                label={t(`voice.status.${stt.status}`)}
                aria-live="polite"
              />
            </Stack>
          ) : (
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', textAlign: 'start' }}>
              {t('voice.sttUnsupported')}
            </Typography>
          )}

          {stt.interim ? (
            <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic', color: 'text.secondary', textAlign: 'start' }} aria-live="polite">
              {t('voice.listening')}: {stt.interim}
            </Typography>
          ) : null}

          {stt.error ? (
            <Alert severity={stt.error === 'noSpeech' ? 'info' : 'warning'} sx={{ mt: 1, textAlign: 'start' }}>
              {t(`voice.error.${stt.error}`)}
            </Alert>
          ) : null}

          {stt.supported ? (
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 1, textAlign: 'start' }}>
              {t('voice.privacy')}
            </Typography>
          ) : null}
        </Box>
      ) : null}
    </Box>
  );
};

export default AnswerInput;
