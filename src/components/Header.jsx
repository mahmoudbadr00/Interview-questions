// Header.jsx
import { AppBar, Toolbar, Typography, Box, Badge, IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import InsightsIcon from '@mui/icons-material/Insights';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/useLanguage';

// Shared nav button styling. Tighter hit area + smaller glyphs on phones so the
// whole action row (switcher + 4 icons) stays inside a 320px viewport.
const navButtonSx = {
  color: '#ecf0f1',
  flexShrink: 0,
  padding: { xs: '5px', sm: '8px' },
  transition: 'all 0.2s ease',
  '& .MuiSvgIcon-root': { fontSize: { xs: '1.25rem', sm: '1.5rem' } },
  '&:hover': { color: '#3498db' },
};

const Header = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    // Set initial count from localStorage
    const initialFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavoritesCount(initialFavorites.length);

    // Update count when favorites change
    const handleFavoritesUpdate = (event) => {
      if (event.detail?.count !== undefined) {
        setFavoritesCount(event.detail.count);
      } else {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavoritesCount(favorites.length);
      }
    };

    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);

    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#2c3e50',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: { xs: 0.5, sm: 1 },
          minHeight: { xs: 56, sm: 64 },
          padding: { xs: '0.5rem 0.625rem', sm: '0.5rem 2rem' },
        }}
      >
        <Typography
          variant="h5"
          component="button"
          onClick={() => navigate('/')}
          sx={{
            // The title is the only flexible item: it shrinks and ellipsizes
            // instead of pushing the action icons out of the viewport.
            flex: '0 1 auto',
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontWeight: 700,
            color: '#ecf0f1',
            fontSize: { xs: '1.1rem', sm: '1.8rem' },
            letterSpacing: '1px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: 'inherit',
            '&:focus-visible': { outline: '2px solid #3498db', outlineOffset: 4 },
          }}
        >
          {t('app.name')}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexShrink: 0,
            gap: { xs: 0, sm: 1 },
            alignItems: 'center',
          }}
        >
          <LanguageSwitcher />

          <Tooltip title={t('nav.interview')}>
            <IconButton
              onClick={() => navigate('/interview')}
              aria-label={t('nav.interview')}
              sx={navButtonSx}
            >
              <RecordVoiceOverIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={t('nav.progress')}>
            <IconButton
              onClick={() => navigate('/progress')}
              aria-label={t('nav.progress')}
              sx={navButtonSx}
            >
              <InsightsIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={t('nav.favorites')}>
            <IconButton
              onClick={() => navigate('/favorites')}
              aria-label={t('nav.favorites')}
              sx={navButtonSx}
            >
              <Badge
                badgeContent={favoritesCount}
                color="error"
                sx={{ '& .MuiBadge-badge': { fontSize: { xs: '0.6rem', sm: '0.75rem' } } }}
              >
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title={t('nav.home')}>
            <IconButton
              onClick={() => navigate('/')}
              aria-label={t('nav.home')}
              sx={{
                ...navButtonSx,
                '&:hover': { color: '#3498db', transform: 'translateY(-2px)' },
              }}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
