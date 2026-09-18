// FavoritesPage.jsx
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
  Tooltip,
  useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { sections, questionCount } from '../data';
import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/useLanguage';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { t, localize, dir } = useLanguage();
  const [favorites, setFavorites] = useState([]);
  const [favoriteSections, setFavoriteSections] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);

    // Filter sections to only show favorites
    const filteredSections = sections.filter((section) => storedFavorites.includes(section.id));
    setFavoriteSections(filteredSections);
  }, []);

  const toggleFavorite = (section, event) => {
    event.stopPropagation();
    const newFavorites = favorites.filter((id) => id !== section.id);

    setFavorites(newFavorites);
    setFavoriteSections((prevSections) => prevSections.filter((s) => s.id !== section.id));

    localStorage.setItem('favorites', JSON.stringify(newFavorites));

    // Dispatch custom event with the new favorites count
    window.dispatchEvent(
      new CustomEvent('favoritesUpdated', { detail: { count: newFavorites.length } })
    );
  };

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
          gutterBottom
          align="center"
          sx={{
            color: 'text.primary',
            mb: 4,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          {t('favorites.title')}
        </Typography>

        {favoriteSections.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
              {t('favorites.empty')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              {t('favorites.emptyHint')}
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/')}>
              {t('favorites.browseSections')}
            </Button>
          </Box>
        ) : (
          <List sx={{ width: '100%' }}>
            {favoriteSections.map((section) => (
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
                  <Tooltip title={t('home.removeFromFavorites')}>
                    <IconButton
                      onClick={(e) => toggleFavorite(section, e)}
                      aria-label={t('home.removeFromFavorites')}
                      sx={{ marginInlineStart: 2 }}
                    >
                      <FavoriteIcon sx={{ color: 'error.main', transition: 'color 0.3s ease' }} />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              </Paper>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default FavoritesPage;
