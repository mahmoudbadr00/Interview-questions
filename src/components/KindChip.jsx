// components/KindChip.jsx
import { Chip } from '@mui/material';
import { useLanguage } from '../i18n/useLanguage';

const KIND_COLOR = {
  concept: 'default',
  scenario: 'info',
  debug: 'error',
  coding: 'primary',
  behavioral: 'success',
  tradeoff: 'secondary',
  design: 'secondary',
};

/** Small label for a question's kind ("Scenario", "Coding challenge"...). */
const KindChip = ({ kind, sx }) => {
  const { t } = useLanguage();
  if (!kind || kind === 'concept') return null;
  return (
    <Chip
      label={t(`kind.${kind}`)}
      color={KIND_COLOR[kind] ?? 'default'}
      size="small"
      variant="outlined"
      sx={{ flexShrink: 0, ...sx }}
    />
  );
};

export default KindChip;
