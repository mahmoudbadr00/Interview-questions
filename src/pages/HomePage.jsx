import { useNavigate } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Paper,
  Typography,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import InsightsIcon from '@mui/icons-material/Insights';
import { sections, questionCount } from '../data';
import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../i18n/useLanguage';

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { t, localize, dir } = useLanguage();
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (section, event) => {
    event.stopPropagation();
    const newFavorites = favorites.includes(section.id)
      ? favorites.filter((id) => id !== section.id)
      : [...favorites, section.id];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));

    // Dispatch custom event with the new favorites count
    window.dispatchEvent(
      new CustomEvent('favoritesUpdated', { detail: { count: newFavorites.length } })
    );
  };

  const visibleSections = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return sections;
    return sections.filter(
      (section) =>
        section.name.ar.toLowerCase().includes(term) || section.name.en.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <Container
      maxWidth={false}
      sx={{
        width: '100%',
        px: { xs: 2, sm: 4, md: 8 },
        py: 4,
      }}
    >
      <Box sx={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            color: 'text.primary',
            mb: 1,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          {t('home.title')}
        </Typography>

        <Typography align="center" sx={{ color: 'text.secondary', mb: 3 }}>
          {t('home.subtitle')}
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 2.5 },
            mb: 3,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 2,
            bgcolor: 'background.paper',
            borderInlineStart: '4px solid #3498db',
          }}
        >
          <Box sx={{ flexGrow: 1, minWidth: 200, textAlign: 'start' }}>
            <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>{t('home.interviewCta')}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('home.interviewHint')}
            </Typography>
          </Box>
          <Stack direction="row" flexWrap="wrap" sx={{ gap: 1 }}>
            <Button variant="contained" startIcon={<RecordVoiceOverIcon />} onClick={() => navigate('/interview')}>
              {t('nav.interview')}
            </Button>
            <Button variant="outlined" startIcon={<InsightsIcon />} onClick={() => navigate('/progress')}>
              {t('home.progressCta')}
            </Button>
          </Stack>
        </Paper>

        <TextField
          fullWidth
          size="small"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t('home.searchPlaceholder')}
          inputProps={{ 'aria-label': t('home.searchPlaceholder') }}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {visibleSections.length === 0 ? (
          <Typography align="center" variant="h6" sx={{ color: 'text.secondary', py: 6 }}>
            {t('home.noSections')}
          </Typography>
        ) : (
          <List sx={{ width: '100%' }}>
            {visibleSections.map((section) => {
              const isFavorite = favorites.includes(section.id);
              return (
                <Paper
                  key={section.id}
                  elevation={3}
                  sx={{
                    mb: 2,
                    transition: 'transform 0.2s',
                    cursor: 'pointer',
                    width: '100%',
                    bgcolor: 'background.paper',
                    borderInlineStart: `4px solid ${section.color}`,
                    '&:hover': {
                      transform: dir === 'rtl' ? 'translateX(-10px)' : 'translateX(10px)',
                    },
                  }}
                >
                  <ListItem
                    onClick={() => navigate(`/section/${section.id}`)}
                    sx={{
                      justifyContent: 'space-between',
                      gap: 1,
                      '&:hover': { backgroundColor: theme.palette.action.hover },
                    }}
                  >
                    <ListItemText
                      primary={localize(section.name)}
                      secondary={t('home.questionsCount', { count: questionCount(section.id) })}
                      sx={{
                        textAlign: 'center',
                        '& .MuiListItemText-primary': {
                          color: 'text.primary',
                          fontWeight: 'bold',
                        },
                      }}
                    />
                    <Tooltip
                      title={isFavorite ? t('home.removeFromFavorites') : t('home.addToFavorites')}
                    >
                      <IconButton
                        onClick={(e) => toggleFavorite(section, e)}
                        aria-label={
                          isFavorite ? t('home.removeFromFavorites') : t('home.addToFavorites')
                        }
                        aria-pressed={isFavorite}
                        sx={{ marginInlineStart: 2 }}
                      >
                        <FavoriteIcon
                          sx={{
                            color: isFavorite ? 'error.main' : 'action.disabled',
                            transition: 'color 0.3s ease',
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </ListItem>
                </Paper>
              );
            })}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
