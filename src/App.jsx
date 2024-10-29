import { BrowserRouter } from 'react-router-dom';
import Router from './route';
import Header from './components/Header';
import { Box } from '@mui/material';
import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}>
        <Header />
        <Box sx={{ 
          flex: 1,
          width: '100%',
          position: 'relative'
        }}>
          <Router />
        </Box>
        
      </Box>
      <Footer />
    </BrowserRouter>
  );
};
export default App;





