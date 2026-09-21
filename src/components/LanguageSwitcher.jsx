// components/LanguageSwitcher.jsx
import { Box, ButtonBase, Tooltip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLanguage } from '../i18n/useLanguage';
import { LANGUAGES, languageMeta } from '../i18n/translations';

/**
 * Compact AR | EN toggle. Fixed width per option so switching never shifts
 * the surrounding toolbar layout. On phones the decorative globe is dropped
 * and the pills tighten, to leave room for the nav icons next to it.
 */
const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Box
      role="group"
      aria-label={t('nav.language')}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        gap: { xs: 0.25, sm: 0.5 },
        px: { xs: 0.25, sm: 0.75 },
        py: 0.25,
        mr: { xs: 0.25, sm: 0 },
        borderRadius: 2,
        border: '1px solid rgba(236, 240, 241, 0.35)',
      }}
    >
      <TranslateIcon
        sx={{ display: { xs: 'none', sm: 'block' }, fontSize: 18, color: '#ecf0f1', opacity: 0.8 }}
      />
      {LANGUAGES.map((code) => {
        const isActive = code === language;
        return (
          <Tooltip
            key={code}
            title={code === 'en' ? t('nav.switchToEnglish') : t('nav.switchToArabic')}
          >
            <ButtonBase
              onClick={() => setLanguage(code)}
              aria-pressed={isActive}
              lang={code}
              sx={{
                minWidth: { xs: 26, sm: 34 },
                px: { xs: 0.4, sm: 0.75 },
                py: 0.25,
                borderRadius: 1.5,
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                fontWeight: 700,
                lineHeight: 1.6,
                letterSpacing: '0.04em',
                color: isActive ? '#2c3e50' : '#ecf0f1',
                backgroundColor: isActive ? '#ecf0f1' : 'transparent',
                transition: 'background-color 0.2s ease, color 0.2s ease',
                '&:hover': {
                  backgroundColor: isActive ? '#ecf0f1' : 'rgba(236, 240, 241, 0.16)',
                },
                '&:focus-visible': {
                  outline: '2px solid #3498db',
                  outlineOffset: 2,
                },
              }}
            >
              {languageMeta[code].shortLabel}
            </ButtonBase>
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default LanguageSwitcher;
