import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  useTheme,
  alpha,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { sections, faqData } from '../data';
import { DIFFICULTY_COLOR, DIFFICULTY_ORDER, difficultyRank } from '../data/difficulty';
import { useLanguage } from '../i18n/useLanguage';
import AnswerText from '../components/AnswerText';
import CodeBlock from '../components/CodeBlock';
import KindChip from '../components/KindChip';
import QuestionExtras from '../components/QuestionExtras';

const ALL = 'all';

const SectionPage = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const { t, localize } = useLanguage();

  const section = sections.find((s) => s.id === sectionId);
  const questions = useMemo(() => {
    const list = faqData[sectionId] ?? [];
    // Present the content in a progressive order regardless of file layout.
    return [...list].sort((a, b) => difficultyRank(a.difficulty) - difficultyRank(b.difficulty));
  }, [sectionId]);

  const [markedQuestions, setMarkedQuestions] = useState(() => new Set());
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState(ALL);

  useEffect(() => {
    setSearch('');
    setDifficulty(ALL);
  }, [sectionId]);

  // Review marks are keyed by question id. Older releases stored array
  // indexes, so those are migrated on read instead of being discarded.
  useEffect(() => {
    const list = faqData[sectionId] ?? [];
    let stored = [];
    try {
      stored = JSON.parse(localStorage.getItem(`marked-${sectionId}`) || '[]');
    } catch {
      stored = [];
    }
    const migrated = stored
      .map((entry) => (typeof entry === 'number' ? list[entry]?.id : entry))
      .filter(Boolean);
    setMarkedQuestions(new Set(migrated));
  }, [sectionId]);

  const toggleMarked = (id) => {
    setMarkedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(`marked-${sectionId}`, JSON.stringify(Array.from(next)));
      } catch {
        // Persisting review marks is best-effort.
      }
      return next;
    });
  };

  const visibleQuestions = useMemo(() => {
    const term = search.trim().toLowerCase();
    return questions.filter((item) => {
      if (difficulty !== ALL && item.difficulty !== difficulty) return false;
      if (!term) return true;
      const haystack = `${localize(item.question)} ${localize(item.answer)}`.toLowerCase();
      return haystack.includes(term);
    });
  }, [questions, search, difficulty, localize]);

  const resetFilters = () => {
    setSearch('');
    setDifficulty(ALL);
  };

  if (!section) {
    return (
      <Container maxWidth={false} sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
          {t('section.notFound')}
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          {t('section.backHome')}
        </Button>
      </Container>
    );
  }

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
            mb: 3,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 500,
          }}
        >
          {localize(section.name)}
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ gap: { xs: 1.5, sm: 3 }, mb: 2, color: 'text.secondary', fontSize: '0.9rem' }}
        >
          <Typography variant="body2">
            {t('section.totalQuestions')}: {questions.length}
          </Typography>
          <Typography variant="body2">
            {t('section.shownQuestions')}: {visibleQuestions.length}
          </Typography>
          <Typography variant="body2">
            {t('section.markedQuestions')}: {markedQuestions.size}
          </Typography>
        </Stack>

        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Button
            component={RouterLink}
            to={`/interview?category=${section.id}`}
            variant="outlined"
            size="small"
            startIcon={<RecordVoiceOverIcon />}
          >
            {t('question.practiceSection')}
          </Button>
        </Box>

        <TextField
          fullWidth
          size="small"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t('section.searchPlaceholder')}
          inputProps={{ 'aria-label': t('section.searchPlaceholder') }}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: search ? (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  aria-label={t('section.clearSearch')}
                  onClick={() => setSearch('')}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
        />

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ gap: 1, mb: 3 }}
          role="group"
          aria-label={t('difficulty.label')}
        >
          <Chip
            label={t('difficulty.all')}
            onClick={() => setDifficulty(ALL)}
            color={difficulty === ALL ? 'primary' : 'default'}
            variant={difficulty === ALL ? 'filled' : 'outlined'}
            size="small"
          />
          {DIFFICULTY_ORDER.map((level) => (
            <Chip
              key={level}
              label={t(`difficulty.${level}`)}
              onClick={() => setDifficulty(level)}
              color={difficulty === level ? DIFFICULTY_COLOR[level] : 'default'}
              variant={difficulty === level ? 'filled' : 'outlined'}
              size="small"
            />
          ))}
        </Stack>

        {visibleQuestions.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
              {questions.length === 0 ? t('section.empty') : t('section.noResults')}
            </Typography>
            {questions.length > 0 && (
              <>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {t('section.noResultsHint')}
                </Typography>
                <Button variant="outlined" size="small" onClick={resetFilters}>
                  {t('section.clearFilters')}
                </Button>
              </>
            )}
          </Box>
        ) : (
          <Box sx={{ mt: 1 }}>
            {visibleQuestions.map((item) => {
              const isMarked = markedQuestions.has(item.id);

              return (
                <Accordion
                  key={item.id}
                  sx={{
                    mb: 2,
                    cursor: 'pointer',
                    width: '100%',
                    backgroundColor: isMarked
                      ? alpha(theme.palette.error.main, 0.1)
                      : 'background.paper',
                    transition: 'background-color 0.3s ease',
                    '&:hover': { boxShadow: theme.shadows[1] },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      '&:hover': { backgroundColor: theme.palette.action.hover },
                      '& .MuiAccordionSummary-content': { alignItems: 'center', minWidth: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        gap: 1.5,
                        minWidth: 0,
                      }}
                    >
                      <Tooltip
                        title={isMarked ? t('section.unmarkForReview') : t('section.markForReview')}
                      >
                        <IconButton
                          size="small"
                          aria-label={
                            isMarked ? t('section.unmarkForReview') : t('section.markForReview')
                          }
                          aria-pressed={isMarked}
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleMarked(item.id);
                          }}
                          sx={{
                            color: isMarked ? 'error.main' : 'action.disabled',
                            '&:hover': { color: 'error.main' },
                            flexShrink: 0,
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Tooltip>

                      <Typography
                        fontWeight="bold"
                        sx={{
                          flexGrow: 1,
                          minWidth: 0,
                          textAlign: 'start',
                          color: 'text.primary',
                        }}
                      >
                        {localize(item.question)}
                      </Typography>

                      <KindChip kind={item.kind} sx={{ display: { xs: 'none', sm: 'inline-flex' } }} />
                      <Chip
                        label={t(`difficulty.${item.difficulty}`)}
                        color={DIFFICULTY_COLOR[item.difficulty]}
                        size="small"
                        variant="outlined"
                        sx={{ flexShrink: 0, display: { xs: 'none', sm: 'inline-flex' } }}
                      />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mb: 1.5, display: { xs: 'flex', sm: 'none' } }}>
                      <Chip
                        label={t(`difficulty.${item.difficulty}`)}
                        color={DIFFICULTY_COLOR[item.difficulty]}
                        size="small"
                        variant="outlined"
                      />
                      <KindChip kind={item.kind} />
                    </Stack>
                    {item.code ? (
                      <>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', textAlign: 'start' }}>
                          {t('question.codeLabel')}
                        </Typography>
                        <CodeBlock code={item.code} />
                      </>
                    ) : null}
                    <AnswerText text={localize(item.answer)} />
                    <QuestionExtras question={item} />
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default SectionPage;
