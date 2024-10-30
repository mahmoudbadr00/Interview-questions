// // FavoritesPage.jsx
// import { useNavigate } from 'react-router-dom';
// import {
//   List,
//   ListItem,
//   ListItemText,
//   Container,
//   Paper,
//   Typography,
//   Box,
//   IconButton,
// } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { sections } from '../data';
// import { useState, useEffect } from 'react';

// const FavoritesPage = () => {
//   const navigate = useNavigate();
//   const [favorites, setFavorites] = useState([]);
//   const [favoriteSections, setFavoriteSections] = useState([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//     setFavorites(storedFavorites);
    
//     // Filter sections to only show favorites
//     const filteredSections = sections.filter(section => 
//       storedFavorites.includes(section.id)
//     );
//     setFavoriteSections(filteredSections);
//   }, []);

//   const toggleFavorite = (section, event) => {
//     event.stopPropagation();
//     const newFavorites = favorites.filter(id => id !== section.id);
    
//     setFavorites(newFavorites);
//     setFavoriteSections(prevSections => 
//       prevSections.filter(s => s.id !== section.id)
//     );
    
//     localStorage.setItem('favorites', JSON.stringify(newFavorites));
    
//     // Dispatch custom event to update header badge
//     window.dispatchEvent(new Event('favoritesUpdated'));
//   };

//   return (
//     <Container 
//       maxWidth={false} 
//       sx={{ 
//         width: '100%',
//         px: { xs: 2, sm: 4, md: 8 },
//         py: 4
//       }}
//     >
//       <Box sx={{ 
//         maxWidth: '800px', 
//         margin: '0 auto',
//         width: '100%'
//       }}>
//         <Typography 
//           variant="h4" 
//           gutterBottom 
//           align="center"
//           sx={{ 
//             color: 'black',
//             mb: 4,
//             fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
//           }}
//         >
//           المفضلة
//         </Typography>
//         {favoriteSections.length === 0 ? (
//           <Typography 
//             variant="h6" 
//             align="center"
//             sx={{ color: 'grey.600' }}
//           >
//             لا توجد عناصر في المفضلة
//           </Typography>
//         ) : (
//           <List sx={{ width: '100%' }}>
//             {favoriteSections.map((section) => (
//               <Paper
//                 key={section.id}
//                 elevation={3}
//                 sx={{ 
//                   mb: 2,
//                   transition: 'transform 0.2s',
//                   cursor: 'pointer',
//                   width: '100%',
//                   '&:hover': {
//                     transform: 'translateX(10px)',
//                   }
//                 }}
//               >
//                 <ListItem
//                   onClick={() => navigate(`/section/${section.id}`)}
//                   sx={{
//                     justifyContent: 'space-between',
//                     '&:hover': {
//                       backgroundColor: 'rgba(0, 0, 0, 0.04)',
//                     }
//                   }}
//                 >
//                   <ListItemText
//                     primary={section.name}
//                     sx={{
//                       textAlign: 'center',
//                       '& .MuiTypography-root': {
//                         color: 'black',
//                         fontWeight: 'bold',
//                       },
//                     }}
//                   />
//                   <IconButton 
//                     onClick={(e) => toggleFavorite(section, e)}
//                     sx={{ ml: 2 }}
//                   >
//                     <FavoriteIcon 
//                       sx={{ 
//                         color: 'red',
//                         transition: 'color 0.3s ease'
//                       }} 
//                     />
//                   </IconButton>
//                 </ListItem>
//               </Paper>
//             ))}
//           </List>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default FavoritesPage;


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
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { sections } from '../data';
import { useState, useEffect } from 'react';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [favoriteSections, setFavoriteSections] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
    
    // Filter sections to only show favorites
    const filteredSections = sections.filter(section => 
      storedFavorites.includes(section.id)
    );
    setFavoriteSections(filteredSections);
  }, []);

  const toggleFavorite = (section, event) => {
    event.stopPropagation();
    const newFavorites = favorites.filter(id => id !== section.id);
    
    setFavorites(newFavorites);
    setFavoriteSections(prevSections => 
      prevSections.filter(s => s.id !== section.id)
    );
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    
    // Dispatch custom event with the new favorites count
    event = new CustomEvent('favoritesUpdated', {
      detail: { count: newFavorites.length }
    });
    window.dispatchEvent(event);
  };

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        width: '100%',
        px: { xs: 2, sm: 4, md: 8 },
        py: 4
      }}
    >
      <Box sx={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        width: '100%'
      }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          align="center"
          sx={{ 
            color: 'text.primary',
            mb: 4,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
          }}
        >
          المفضلة
        </Typography>
        {favoriteSections.length === 0 ? (
          <Typography 
            variant="h6" 
            align="center"
            sx={{ color: 'text.secondary' }}
          >
            لا توجد عناصر في المفضلة
          </Typography>
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
                  '&:hover': {
                    transform: 'translateX(10px)',
                  }
                }}
              >
                <ListItem
                  onClick={() => navigate(`/section/${section.id}`)}
                  sx={{
                    justifyContent: 'space-between',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    }
                  }}
                >
                  <ListItemText
                    primary={section.name}
                    sx={{
                      textAlign: 'center',
                      '& .MuiTypography-root': {
                        color: 'text.primary',
                        fontWeight: 'bold',
                      },
                    }}
                  />
                  <IconButton 
                    onClick={(e) => toggleFavorite(section, e)}
                    sx={{ ml: 2 }}
                  >
                    <FavoriteIcon 
                      sx={{ 
                        color: 'error.main',
                        transition: 'color 0.3s ease'
                      }} 
                    />
                  </IconButton>
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