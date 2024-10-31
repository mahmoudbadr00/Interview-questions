import { BrowserRouter } from 'react-router-dom';
import Router from './route';
import Header from './components/Header';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default App;





