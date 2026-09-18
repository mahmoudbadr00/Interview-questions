// components/interview/VoiceControls.jsx
// Text-to-speech buttons for reading the current question.
import { Button, Stack, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import ReplayIcon from '@mui/icons-material/Replay';
import { useLanguage } from '../../i18n/useLanguage';
import { TTS_STATUS } from '../../voice/useSpeechSynthesis';

const VoiceControls = ({ tts, text }) => {
  const { t } = useLanguage();
  if (!tts.supported) {
    return (
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {t('voice.ttsUnsupported')}
      </Typography>
    );
  }
  const speaking = tts.status === TTS_STATUS.speaking;
  const paused = tts.status === TTS_STATUS.paused;

  return (
    <Stack direction="row" flexWrap="wrap" sx={{ gap: 1 }} aria-label={t('voice.readQuestion')}>
      {!speaking && !paused ? (
        <Button size="small" variant="outlined" startIcon={<VolumeUpIcon />} onClick={() => tts.speak(text)}>
          {t('voice.readQuestion')}
        </Button>
      ) : null}
      {speaking ? (
        <Button size="small" variant="outlined" startIcon={<PauseIcon />} onClick={tts.pause}>
          {t('voice.pause')}
        </Button>
      ) : null}
      {paused ? (
        <Button size="small" variant="outlined" startIcon={<PlayArrowIcon />} onClick={tts.resume}>
          {t('voice.resume')}
        </Button>
      ) : null}
      {speaking || paused ? (
        <Button size="small" variant="text" startIcon={<StopIcon />} onClick={tts.stop}>
          {t('voice.stop')}
        </Button>
      ) : null}
      {speaking || paused ? (
        <Button size="small" variant="text" startIcon={<ReplayIcon />} onClick={tts.replay}>
          {t('voice.replay')}
        </Button>
      ) : null}
    </Stack>
  );
};

export default VoiceControls;
