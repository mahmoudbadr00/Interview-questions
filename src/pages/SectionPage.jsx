import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  IconButton,
  useTheme,
  alpha
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { sections, faqData } from '../data';

const SectionPage = () => {
  const { sectionId } = useParams();
  const section = sections.find((s) => s.id === sectionId);
  const questions = faqData[sectionId] || [];
  const [markedQuestions, setMarkedQuestions] = useState(new Set());
  const theme = useTheme();
  useEffect(() => {
    const savedMarked = localStorage.getItem(`marked-${sectionId}`);
    if (savedMarked) {
      setMarkedQuestions(new Set(JSON.parse(savedMarked)));
    }
  }, [sectionId]);

  useEffect(() => {
    if (markedQuestions.size > 0) {
      localStorage.setItem(
        `marked-${sectionId}`,
        JSON.stringify(Array.from(markedQuestions))
      );
    }
  }, [markedQuestions, sectionId]);

  const toggleMarked = (index) => {
    setMarkedQuestions((prevMarkedQuestions) => {
      const newMarked = new Set(prevMarkedQuestions);
      if (newMarked.has(index)) {
        newMarked.delete(index);
      } else {
        newMarked.add(index);
      }
      return newMarked;
    });
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: '100%',
        px: { xs: 2, sm: 4, md: 8 },
        py: 4,
        direction: 'rtl'
      }}
    >
      <Box
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            color: 'text.primary',
            mb: 4,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontFamily: 'Tajawal, Arial, sans-serif',
            fontWeight: 500,
          }}
        >
          {section?.name}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            mb: 3,
            fontSize: '0.9rem',
            color: 'text.secondary',
            fontFamily: 'Tajawal, Arial, sans-serif',
          }}
        >
          <Typography>إجمالي الأسئلة: {questions.length}</Typography>
          <Typography>الأسئلة المراد مراجعتها: {markedQuestions.size}</Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          {questions.map((item, index) => {
            const isMarked = markedQuestions.has(index);

            return (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  cursor: 'pointer',
                  width: '100%',
                  backgroundColor: isMarked ? alpha(theme.palette.error.main, 0.1) : 'background.paper',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    boxShadow: theme.shadows[1],
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      position: 'relative',
                      gap: 2,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMarked(index);
                      }}
                      sx={{
                        color: isMarked ? 'error.main' : 'action.disabled',
                        '&:hover': {
                          color: 'error.main',
                        },
                        minWidth: '40px',
                      }}
                    >
                      <CloseIcon />
                    </IconButton>

                    <Typography
                      fontWeight="bold"
                      sx={{
                        width: '100%',
                        textAlign: { xs: 'center', sm: 'right' },
                        fontFamily: 'Tajawal, Arial, sans-serif',
                        flexGrow: 1,
                        pr: { xs: 0, sm: 2 },
                        color: 'text.primary',
                      }}
                    >
                      {item.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography 
                    sx={{ 
                      fontFamily: 'Tajawal, Arial, sans-serif',
                      lineHeight: 1.6,
                      textAlign: 'right',
                      color: 'text.primary',
                    }}
                  >
                    {item.answer.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default SectionPage;