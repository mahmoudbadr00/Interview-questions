import { Box, Container, Typography } from '@mui/material';
import { LinkedIn, GitHub, Facebook, WhatsApp, Email } from '@mui/icons-material';
const Footer = () => {
  const socialLinks = [
    { 
      icon: <Email />, 
      url: 'mailto:mahmoud.tamer.badr2000@gmail.com',
      color: '#d44638'
    },
    { 
      icon: <LinkedIn />, 
      url: 'http://www.linkedin.com/in/mahmoud-badr-b73516242', 
      color: '#0077b5'
    },
    { 
      icon: <GitHub />, 
      url: 'https://github.com/mahmoudbadr00', 
      color: '#333'
    },
    { 
      icon: <Facebook />, 
      url: 'https://www.facebook.com/mahmoud.tamer.904', 
      color: '#1877f2'
    },
    { 
      icon: <WhatsApp />, 
      url: 'https://wa.me/201159603177',
      color: '#25d366'
    },
  ];
  return (
    <Box 
      component="footer" 
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body1" color="text.secondary" align="center">
            Made by Mahmoud Badr 2024
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((social, index) => (
              <Box
                key={index}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: social.color,
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'scale(1.2)',
                  },
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                {social.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;