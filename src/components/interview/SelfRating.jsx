// components/interview/SelfRating.jsx
import { Box, Chip, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useLanguage } from '../../i18n/useLanguage';
import { SELF_RATING } from '../../interview/config';

const RATING_COLOR = { correct: 'success', partial: 'warning', incorrect: 'error' };

const SelfRating = ({ rating, confidence, onChange, compact = false }) => {
  const { t } = useLanguage();

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: 'start' }}>
        {t('rating.title')}
      </Typography>
      {!compact ? (
        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1, textAlign: 'start' }}>
          {t('rating.hint')}
        </Typography>
      ) : null}
      <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, my: 1 }} role="group" aria-label={t('rating.title')}>
        {Object.values(SELF_RATING).map((value) => (
          <Chip
            key={value}
            label={t(`rating.${value}`)}
            color={rating === value ? RATING_COLOR[value] : 'default'}
            variant={rating === value ? 'filled' : 'outlined'}
            onClick={() => onChange({ rating: value })}
            aria-pressed={rating === value}
            sx={{ fontWeight: 600 }}
          />
        ))}
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5, mb: 0.5, textAlign: 'start' }}>
        {t('rating.confidence')}
      </Typography>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={confidence ?? null}
        onChange={(_, value) => value != null && onChange({ confidence: value })}
        aria-label={t('rating.confidence')}
        sx={{ flexWrap: 'wrap' }}
      >
        {[1, 2, 3, 4, 5].map((level) => (
          <ToggleButton key={level} value={level} sx={{ textTransform: 'none', px: 1.5 }}>
            {level} · {t(`rating.confidence.${level}`)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default SelfRating;
