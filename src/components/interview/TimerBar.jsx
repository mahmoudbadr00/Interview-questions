// components/interview/TimerBar.jsx
import { Box, LinearProgress, Typography } from '@mui/material';
import { useLanguage } from '../../i18n/useLanguage';
import { formatClock } from '../../interview/time';

const TimerBar = ({ remainingMs, durationMs }) => {
  const { t } = useLanguage();
  const fraction = durationMs ? remainingMs / durationMs : 0;
  const warning = remainingMs > 0 && remainingMs <= 2 * 60 * 1000;
  const color = remainingMs === 0 ? 'error' : warning ? 'warning' : 'primary';

  return (
    <Box sx={{ mb: 2 }} role="timer" aria-live={warning ? 'polite' : 'off'}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {remainingMs === 0 ? t('session.timeUp') : warning ? t('session.timeWarning') : t('session.timeLeft')}
        </Typography>
        <Typography variant="h6" component="span" dir="ltr" sx={{ fontVariantNumeric: 'tabular-nums', color: `${color}.main`, fontWeight: 700 }}>
          {formatClock(remainingMs)}
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={Math.round(fraction * 100)} color={color} sx={{ height: 6, borderRadius: 3 }} />
    </Box>
  );
};

export default TimerBar;
