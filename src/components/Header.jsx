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
          gap: 1,
          padding: { xs: '0.5rem 1rem', sm: '0.5rem 2rem' },
        }}
      >
        <Typography
          variant="h5"
          component="button"
          onClick={() => navigate('/')}
          sx={{
            fontWeight: 700,
            color: '#ecf0f1',
            fontSize: { xs: '1.25rem', sm: '1.8rem' },
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

        <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1.5 }, alignItems: 'center' }}>
          <LanguageSwitcher />

          <Tooltip title={t('nav.interview')}>
            <IconButton
              onClick={() => navigate('/interview')}
              aria-label={t('nav.interview')}
              sx={{ color: '#ecf0f1', '&:hover': { color: '#3498db' } }}
            >
              <RecordVoiceOverIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={t('nav.progress')}>
            <IconButton
              onClick={() => navigate('/progress')}
              aria-label={t('nav.progress')}
              sx={{ color: '#ecf0f1', '&:hover': { color: '#3498db' } }}
            >
              <InsightsIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title={t('nav.favorites')}>
            <IconButton
              onClick={() => navigate('/favorites')}
              aria-label={t('nav.favorites')}
              sx={{
                color: '#ecf0f1',
                '&:hover': { color: '#3498db' },
              }}
            >
              <Badge badgeContent={favoritesCount} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title={t('nav.home')}>
            <IconButton
              onClick={() => navigate('/')}
              aria-label={t('nav.home')}
              sx={{
                cursor: 'pointer',
                color: '#ecf0f1',
                fontSize: { xs: '1.5rem', sm: '1.6rem' },
                fontWeight: 500,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: '#3498db',
                  transform: 'translateY(-2px)',
                },
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
