import { BrowserRouter } from 'react-router-dom';
import Router from './route';
import Header from './components/Header';
import { Box } from '@mui/material';
import Footer from './components/Footer';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LanguageProvider from './i18n/LanguageProvider';
import { useLanguage } from './i18n/useLanguage';

const AppShell = () => {
  const { dir, language } = useLanguage();
  const [theme, colorMode] = useMode(dir, language);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '100vh',
              width: '100vw',
              overflow: 'hidden',
            }}
          >
            <Header />
            <Box
              sx={{
                flex: 1,
                width: '100%',
                position: 'relative',
              }}
            >
              <Router />
            </Box>
          </Box>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const App = () => (
  <LanguageProvider>
    <AppShell />
  </LanguageProvider>
);

export default App;
