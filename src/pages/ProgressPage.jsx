// pages/ProgressPage.jsx
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { sections, allQuestions, findQuestion } from '../data';
import { useLanguage } from '../i18n/useLanguage';
import { clearProgress, computeStats, loadProgress } from '../progress/store';
import { clearHistory, loadHistory, summarize } from '../interview/session';
import { formatClock } from '../interview/time';

const Stat = ({ label, value }) => (
  <Box sx={{ textAlign: 'center', minWidth: 100 }}>
    <Typography variant="h5" sx={{ fontWeight: 700 }}>
      {value}
    </Typography>
    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
      {label}
    </Typography>
  </Box>
);

const sectionName = (id, localize) => {
  const s = sections.find((x) => x.id === id);
  return s ? localize(s.name) : id;
};

const ProgressPage = () => {
  const navigate = useNavigate();
  const { t, localize, language } = useLanguage();
  const [version, setVersion] = useState(0);
  const [confirmReset, setConfirmReset] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stats = useMemo(() => computeStats(loadProgress(), allQuestions), [version]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const history = useMemo(() => loadHistory(), [version]);

  const dateFormat = useMemo(() => new Intl.DateTimeFormat(language === 'ar' ? 'ar-EG' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' }), [language]);

  const reset = () => {
    clearProgress();
    clearHistory();
    setConfirmReset(false);
    setVersion((v) => v + 1);
  };

  const empty = stats.totalAttempts === 0;

  return (
    <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 }, py: 4 }}>
      <Box sx={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Typography variant="h4" align="center" sx={{ color: 'text.primary', mb: 1, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          {t('progress.title')}
        </Typography>
        <Typography align="center" sx={{ color: 'text.secondary', mb: 3 }}>
          {t('progress.subtitle')}
        </Typography>

        {empty ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
              {t('progress.empty')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              {t('progress.emptyHint')}
            </Typography>
            <Button variant="contained" onClick={() => navigate('/interview')}>
              {t('home.interviewCta')}
            </Button>
          </Box>
        ) : (
          <>
            <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', textAlign: 'start' }}>
                {t('progress.readiness')}
              </Typography>
              <Stack direction="row" alignItems="center" sx={{ gap: 2, my: 1 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, minWidth: 90 }}>
                  {stats.readiness}%
                </Typography>
                <LinearProgress variant="determinate" value={stats.readiness} sx={{ flexGrow: 1, height: 10, borderRadius: 5 }} />
              </Stack>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', textAlign: 'start' }}>
                {t('progress.readinessHint')}
              </Typography>
              <Stack direction="row" flexWrap="wrap" justifyContent="space-around" sx={{ gap: 2, mt: 2 }}>
                <Stat label={t('progress.attempts')} value={stats.totalAttempts} />
                <Stat label={t('progress.questions')} value={stats.questionsPracticed} />
                <Stat label={t('progress.sessions')} value={history.length} />
                {stats.lastPracticedAt ? <Stat label={t('progress.lastPractice')} value={dateFormat.format(stats.lastPracticedAt)} /> : null}
              </Stack>
            </Paper>

            {stats.dueNow.length ? (
              <Alert
                severity="warning"
                sx={{ mb: 3, textAlign: 'start' }}
                action={
                  <Button color="inherit" size="small" onClick={() => navigate('/interview?due=1')}>
                    {t('progress.practiceDue')}
                  </Button>
                }
              >
                {t('progress.dueNow', { count: stats.dueNow.length })}
              </Alert>
            ) : null}

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'start' }}>
              {t('progress.categories')}
            </Typography>
            <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
              {stats.categories.map((c) => (
                <Box key={c.sectionId} sx={{ mb: 1.5 }}>
                  <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {sectionName(c.sectionId, localize)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {t('progress.score')}: {Math.round(c.score * 100)}% · {c.attempts}
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={Math.round(c.score * 100)}
                    color={c.score >= 0.75 ? 'success' : c.score >= 0.5 ? 'warning' : 'error'}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              ))}
            </Paper>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 3 }}>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'error.main', textAlign: 'start' }}>
                  {t('progress.weak')}
                </Typography>
                {stats.weak.length ? (
                  <Stack sx={{ gap: 0.75, mt: 1 }}>
                    {stats.weak.map((c) => (
                      <Chip key={c.sectionId} color="error" variant="outlined" label={`${sectionName(c.sectionId, localize)} · ${Math.round(c.score * 100)}%`} onClick={() => navigate(`/section/${c.sectionId}`)} />
                    ))}
                    <Button size="small" variant="outlined" color="error" onClick={() => navigate('/interview?weak=1')} sx={{ alignSelf: 'flex-start', mt: 0.5 }}>
                      {t('progress.practiceWeak')}
                    </Button>
                  </Stack>
                ) : (
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, textAlign: 'start' }}>
                    {t('progress.noneYet')}
                  </Typography>
                )}
              </Paper>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'success.main', textAlign: 'start' }}>
                  {t('progress.strong')}
                </Typography>
                {stats.strong.length ? (
                  <Stack sx={{ gap: 0.75, mt: 1 }}>
                    {stats.strong.map((c) => (
                      <Chip key={c.sectionId} color="success" variant="outlined" label={`${sectionName(c.sectionId, localize)} · ${Math.round(c.score * 100)}%`} onClick={() => navigate(`/section/${c.sectionId}`)} />
                    ))}
                  </Stack>
                ) : (
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, textAlign: 'start' }}>
                    {t('progress.noneYet')}
                  </Typography>
                )}
              </Paper>
            </Box>

            {stats.confidence ? (
              <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: 'start' }}>
                  {t('progress.confidence')}
                </Typography>
                <Stack direction="row" flexWrap="wrap" justifyContent="space-around" sx={{ gap: 2, mt: 1 }}>
                  <Stat label={t('progress.confidenceAvg')} value={`${stats.confidence.avg.toFixed(1)} / 5`} />
                  <Stat label={t('progress.overconfident')} value={stats.confidence.overconfident} />
                  <Stat label={t('progress.underconfident')} value={stats.confidence.underconfident} />
                </Stack>
              </Paper>
            ) : null}

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, textAlign: 'start' }}>
              {t('progress.review')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5, textAlign: 'start' }}>
              {t('progress.reviewHint')}
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: 2, mb: 3 }}>
              {['soon', 'later', 'muchLater'].map((bucket) => (
                <Paper key={bucket} elevation={1} sx={{ p: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, textAlign: 'start' }}>
                    {t(`progress.bucket.${bucket}`)} · {stats.buckets[bucket].length}
                  </Typography>
                  <Stack sx={{ gap: 0.5, mt: 1 }}>
                    {stats.buckets[bucket].slice(0, 6).map((d) => {
                      const q = findQuestion(d.questionId);
                      return q ? (
                        <Typography key={d.questionId} variant="caption" sx={{ textAlign: 'start', display: 'block', color: 'text.secondary' }} noWrap title={localize(q.question)}>
                          • {localize(q.question)}
                        </Typography>
                      ) : null;
                    })}
                  </Stack>
                </Paper>
              ))}
            </Box>
          </>
        )}

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textAlign: 'start' }}>
          {t('review.history')}
        </Typography>
        {history.length === 0 ? (
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, textAlign: 'start' }}>
            {t('review.noHistory')}
          </Typography>
        ) : (
          <Stack sx={{ gap: 1, mb: 3 }}>
            {history.map((s) => {
              const sum = summarize(s);
              return (
                <Paper key={s.id} elevation={1} sx={{ p: 1.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ flexGrow: 1, minWidth: 0, textAlign: 'start' }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {dateFormat.format(s.finishedAt ?? s.startedAt)} · {t(`interview.type.${s.config.type}`)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {s.config.categories.map((c) => sectionName(c, localize)).join(' · ')} — {sum.answered}/{sum.total} · {formatClock(sum.elapsedMs)}
                    </Typography>
                  </Box>
                  <Button size="small" variant="outlined" onClick={() => navigate(`/interview/review/${s.id}`)}>
                    {t('review.open')}
                  </Button>
                </Paper>
              );
            })}
          </Stack>
        )}

        <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ gap: 1 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', flexGrow: 1, textAlign: 'start' }}>
            {t('progress.privacy')}
          </Typography>
          {!empty || history.length ? (
            <Button size="small" color="error" onClick={() => setConfirmReset(true)}>
              {t('progress.reset')}
            </Button>
          ) : null}
        </Stack>

        <Dialog open={confirmReset} onClose={() => setConfirmReset(false)}>
          <DialogTitle>{t('progress.reset')}</DialogTitle>
          <DialogContent>
            <Typography>{t('progress.resetConfirm')}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmReset(false)}>{t('session.cancel')}</Button>
            <Button color="error" variant="contained" onClick={reset}>
              {t('session.confirm')}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default ProgressPage;
