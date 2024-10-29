
// // Header.jsx
// import { AppBar, Toolbar, Typography, Box, Badge, IconButton } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useState, useEffect } from 'react';

// const Header = () => {
//   const navigate = useNavigate();
//   const [favoritesCount, setFavoritesCount] = useState(0);

//   useEffect(() => {
//     const updateFavoritesCount = () => {
//       const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//       setFavoritesCount(favorites.length);
//     };

//     // Initial count
//     updateFavoritesCount();

//     // Listen for storage changes
//     window.addEventListener('storage', updateFavoritesCount);
    
//     // Custom event for immediate updates
//     window.addEventListener('favoritesUpdated', updateFavoritesCount);

//     return () => {
//       window.removeEventListener('storage', updateFavoritesCount);
//       window.removeEventListener('favoritesUpdated', updateFavoritesCount);
//     };
//   }, []);

//   return (
//     <AppBar 
//       position="sticky" 
//       sx={{ 
//         backgroundColor: '#2c3e50',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//         marginBottom: '20px'
//       }}
//     >
//       <Toolbar sx={{ 
//         display: 'flex', 
//         justifyContent: 'space-between',
//         padding: '0.5rem 2rem',
//       }}>
//         <Typography 
//           variant="h5" 
//           sx={{ 
//             fontFamily: 'Tajawal, Arial, sans-serif',
//             fontWeight: 700,
//             color: '#ecf0f1',
//             fontSize: { xs: '1.5rem', sm: '1.8rem' },
//             letterSpacing: '1px',
//             textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
//           }}
//         >
//           انترفيو
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
//         <IconButton 
//             onClick={() => navigate('/favorites')}
//             sx={{ 
//               color: '#ecf0f1',
//               '&:hover': {
//                 color: '#3498db',
//               }
//             }}
//           >
//             <Badge badgeContent={favoritesCount} color="error">
//               <FavoriteIcon />
//             </Badge>
//           </IconButton>
//           <Typography 
//             variant="h6" 
//             sx={{ 
//               cursor: 'pointer',
//               color: '#ecf0f1',
//               fontSize: { xs: '1rem', sm: '1.1rem' },
//               fontWeight: 500,
//               transition: 'all 0.2s ease',
//               '&:hover': {
//                 color: '#3498db',
//                 transform: 'translateY(-2px)'
//               }
//             }}
//             onClick={() => navigate('/')}
//           >
//             الرئيسية
//           </Typography>
          
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// Header.jsx
import { AppBar, Toolbar, Typography, Box, Badge, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
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
        marginBottom: '20px'
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        padding: '0.5rem 2rem',
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: 'Tajawal, Arial, sans-serif',
            fontWeight: 700,
            color: '#ecf0f1',
            fontSize: { xs: '1.5rem', sm: '1.8rem' },
            letterSpacing: '1px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          }}
        >
          انترفيو
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <IconButton 
            onClick={() => navigate('/favorites')}
            sx={{ 
              color: '#ecf0f1',
              '&:hover': {
                color: '#3498db',
              }
            }}
          >
            <Badge badgeContent={favoritesCount} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          {/* <Typography 
            variant="h6" 
            sx={{ 
              cursor: 'pointer',
              mr:1,
              color: '#ecf0f1',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontWeight: 500,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#3498db',
                transform: 'translateY(-2px)'
              }
            }}
            onClick={() => navigate('/')}
          >
            الرئيسية
          </Typography> */}
          <IconButton 
            sx={{ 
              cursor: 'pointer',
              ml:0,
              mr:1,
              color: '#ecf0f1',
              fontSize: { xs: '1.5rem', sm: '1.6rem' },
              fontWeight: 500,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: '#3498db',
                transform: 'translateY(-2px)'
              }
            }}
            onClick={() => navigate('/')}
          >
            <HomeIcon />
          </IconButton>
          
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;