// pages/InterviewReviewPage.jsx
import { useMemo, useState } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { sections, findQuestion } from '../data';
import { useLanguage } from '../i18n/useLanguage';
import { createLocalizer } from '../i18n/context';
import { findSession, summarize, updateInHistory } from '../interview/session';
import { resolveStep } from '../interview/plan';
import { recordAttempt } from '../progress/store';
import { formatClock } from '../interview/time';
import ComparisonPanel from '../components/interview/ComparisonPanel';
import SelfRating from '../components/interview/SelfRating';
import KindChip from '../components/KindChip';

const RATING_COLOR = { correct: 'success', partial: 'warning', incorrect: 'error' };

const Stat = ({ label, value }) => (
  <Box sx={{ textAlign: 'center', minWidth: 90 }}>
    <Typography variant="h5" sx={{ fontWeight: 700 }}>
      {value}
    </Typography>
    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
      {label}
    </Typography>
  </Box>
);

const InterviewReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, localize: localizeUi } = useLanguage();
  const [session, setSession] = useState(() => findSession(id));

  const localize = useMemo(() => createLocalizer(session?.language ?? 'ar'), [session?.language]);
  const summary = useMemo(() => (session ? summarize(session) : null), [session]);

  const recommendations = useMemo(() => {
    if (!session || !summary) return [];
    const out = [];
    if (summary.rated < summary.answered) out.push(t('review.recommendation.rate'));
    // Weakest category by ratings.
    const perCat = {};
    for (const step of session.steps) {
      const a = session.answers[step.id];
      if (!a?.rating) continue;
      const c = (perCat[step.sectionId] ??= { n: 0, score: 0 });
      c.n++;
      c.score += a.rating === 'correct' ? 1 : a.rating === 'partial' ? 0.5 : 0;
    }
    const weakest = Object.entries(perCat)
      .filter(([, c]) => c.n >= 2)
      .map(([sectionId, c]) => ({ sectionId, avg: c.score / c.n }))
      .sort((a, b) => a.avg - b.avg)[0];
    if (weakest && weakest.avg < 0.6) {
      const section = sections.find((s) => s.id === weakest.sectionId);
      if (section) out.push(t('review.recommendation.weak', { section: localizeUi(section.name) }));
    }
    if (summary.skipped >= 2) out.push(t('review.recommendation.skipped', { count: summary.skipped }));
    const short = Object.values(session.answers).filter((a) => a.comparison?.tooShort).length;
    if (short >= 2) out.push(t('review.recommendation.short'));
    const overconfident = Object.values(session.answers).filter((a) => a.confidence >= 4 && a.rating === 'incorrect').length;
    if (overconfident) out.push(t('review.recommendation.confidence'));
    if (!out.length && summary.rated && summary.counts.correct / summary.rated >= 0.7) out.push(t('review.recommendation.good'));
    return out;
  }, [session, summary, t, localizeUi]);

  if (!session || !summary) {
    return (
      <Container maxWidth={false} sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
          {t('review.notFound')}
        </Typography>
        <Button variant="contained" onClick={() => navigate('/interview')}>
          {t('session.startNew')}
        </Button>
      </Container>
    );
  }

  const rate = (step, { rating, confidence }) => {
    const updated = updateInHistory(session.id, (s) => {
      const prev = s.answers[step.id] ?? { text: '', skipped: true };
      return {
        ...s,
        answers: {
          ...s.answers,
          [step.id]: { ...prev, rating: rating ?? prev.rating ?? null, confidence: confidence ?? prev.confidence ?? null, ratedAt: Date.now() },
        },
      };
    });
    if (!updated) return;
    setSession(updated);
    const answer = updated.answers[step.id];
    if (answer.rating) {
      recordAttempt({
        attemptId: `${session.id}:${step.id}`,
        questionId: step.questionId,
        sectionId: step.sectionId,
        rating: answer.rating,
        coverage: answer.comparison?.coverage ?? null,
        confidence: answer.confidence ?? null,
      });
    }
  };

  const hasWeak = session.steps.some((s) => {
    const a = session.answers[s.id];
    return !a || a.skipped || a.rating === 'incorrect' || a.rating === 'partial';
  });

  return (
    <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 }, py: 4 }}>
      <Box sx={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Typography variant="h4" align="center" sx={{ color: 'text.primary', mb: 1, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          {t('review.title')}
        </Typography>
        <Typography align="center" sx={{ color: 'text.secondary', mb: 3 }}>
          {t(`review.finishReason.${session.finishReason ?? 'completed'}`)}
        </Typography>

        <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
          <Stack direction="row" flexWrap="wrap" justifyContent="space-around" sx={{ gap: 2 }}>
            <Stat label={t('review.answered')} value={summary.answered} />
            <Stat label={t('review.skipped')} value={summary.skipped} />
            <Stat label={t('review.unanswered')} value={summary.unanswered} />
            <Stat label={t('review.time')} value={formatClock(summary.elapsedMs)} />
            {summary.avgCoverage != null ? <Stat label={t('review.avgCoverage')} value={`${Math.round(summary.avgCoverage * 100)}%`} /> : null}
          </Stack>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: 1, mt: 2 }}>
            <Chip color="success" variant="outlined" label={`${t('rating.correct')}: ${summary.counts.correct}`} />
            <Chip color="warning" variant="outlined" label={`${t('rating.partial')}: ${summary.counts.partial}`} />
            <Chip color="error" variant="outlined" label={`${t('rating.incorrect')}: ${summary.counts.incorrect}`} />
          </Stack>
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 1.5 }}>
            {t('review.rated', { rated: summary.rated, answered: summary.answered })}
            {summary.rated < summary.answered ? ` — ${t('review.rateAll')}` : ''}
          </Typography>
        </Paper>

        {recommendations.length ? (
          <Alert severity="info" sx={{ mb: 3, textAlign: 'start' }}>
            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{t('review.recommendations')}</Typography>
            <Box component="ul" sx={{ paddingInlineStart: 2.5, m: 0 }}>
              {recommendations.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </Box>
          </Alert>
        ) : null}

        <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mb: 3 }}>
          <Button variant="contained" onClick={() => navigate('/interview')}>
            {t('review.practiceAgain')}
          </Button>
          {hasWeak ? (
            <Button variant="outlined" onClick={() => navigate(`/interview?retry=${session.id}`)}>
              {t('review.retryWeak')}
            </Button>
          ) : null}
          <Button variant="text" onClick={() => navigate('/progress')}>
            {t('review.viewProgress')}
          </Button>
        </Stack>

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textAlign: 'start' }}>
          {t('review.questions')}
        </Typography>
        {session.steps.map((step, index) => {
          const resolved = resolveStep(step, findQuestion);
          if (!resolved) return null;
          const answer = session.answers[step.id];
          const section = sections.find((s) => s.id === step.sectionId);
          return (
            <Accordion key={step.id} sx={{ mb: 1.5 }}>
              <AccordionSummary expandIcon={<ExpandMore />} sx={{ '& .MuiAccordionSummary-content': { alignItems: 'center', minWidth: 0, gap: 1, flexWrap: 'wrap' } }}>
                <Typography sx={{ fontWeight: 700, flexGrow: 1, minWidth: 0, textAlign: 'start' }}>
                  {index + 1}. {localize(resolved.prompt)}
                </Typography>
                {step.isFollowUp ? <Chip size="small" color="info" label={t('session.followUp')} /> : null}
                <KindChip kind={resolved.question.kind} />
                {answer?.rating ? (
                  <Chip size="small" color={RATING_COLOR[answer.rating]} label={t(`rating.${answer.rating}`)} />
                ) : answer?.skipped ? (
                  <Chip size="small" variant="outlined" label={t('compare.skipped')} />
                ) : !answer ? (
                  <Chip size="small" variant="outlined" label={t('review.unanswered')} />
                ) : null}
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mb: 1 }}>
                  {section ? <Chip size="small" label={localizeUi(section.name)} sx={{ borderInlineStart: `3px solid ${section.color}` }} /> : null}
                  <Chip size="small" variant="outlined" label={t(`difficulty.${step.difficulty}`)} />
                  <Button size="small" component={RouterLink} to={`/section/${step.sectionId}`} sx={{ marginInlineStart: 'auto' }}>
                    {t('review.learnMore')}
                  </Button>
                </Stack>
                <ComparisonPanel answer={answer} resolved={resolved} localizeContent={localize} defaultShowExpected={false} />
                {answer && !answer.skipped ? (
                  <SelfRating rating={answer.rating} confidence={answer.confidence} onChange={(patch) => rate(step, patch)} compact />
                ) : null}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
};

export default InterviewReviewPage;
