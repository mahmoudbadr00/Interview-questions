// pages/InterviewSessionPage.jsx
// The live interview: one step at a time, timer, voice in/out, optional
// immediate comparison + self-rating.
import { useCallback, useEffect, useMemo, useState } from 'react';
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
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { sections, findQuestion } from '../data';
import { useLanguage } from '../i18n/useLanguage';
import { createLocalizer } from '../i18n/context';
import { useInterviewSession } from '../interview/useInterviewSession';
import { ACTIONS, FINISH_REASON, SESSION_STATUS, currentStep, remainingMs } from '../interview/session';
import { resolveStep } from '../interview/plan';
import { COMPARE_MODE, PRESENTATION } from '../interview/config';
import { recordAttempt } from '../progress/store';
import { useSpeechSynthesis } from '../voice/useSpeechSynthesis';
import { useAnswerRecording } from '../voice/useAnswerRecording';
import TimerBar from '../components/interview/TimerBar';
import VoiceControls from '../components/interview/VoiceControls';
import AnswerInput from '../components/interview/AnswerInput';
import ComparisonPanel from '../components/interview/ComparisonPanel';
import SelfRating from '../components/interview/SelfRating';
import CodeBlock from '../components/CodeBlock';
import KindChip from '../components/KindChip';

const InterviewSessionPage = () => {
  const navigate = useNavigate();
  const { t, localize: localizeUi } = useLanguage();
  const { session, dispatch } = useInterviewSession();

  const contentLanguage = session?.language ?? 'ar';
  const localize = useMemo(() => createLocalizer(contentLanguage), [contentLanguage]);
  const contentDir = contentLanguage === 'ar' ? 'rtl' : 'ltr';

  const step = session ? currentStep(session) : null;
  const resolved = useMemo(() => (step ? resolveStep(step, findQuestion) : null), [step]);
  const section = step ? sections.find((s) => s.id === step.sectionId) : null;
  const existing = step ? session.answers[step.id] : null;

  const [text, setText] = useState('');
  const [usedVoice, setUsedVoice] = useState(false);
  const [confirmEnd, setConfirmEnd] = useState(false);
  const [now, setNow] = useState(Date.now());

  const tts = useSpeechSynthesis(contentLanguage);
  // null while answering by voice is disabled — every caller below is optional.
  const stt = useAnswerRecording(contentLanguage);

  const immediate = session?.config.compareMode === COMPARE_MODE.immediate;
  const showText = session?.config.presentation !== PRESENTATION.voice || !tts.supported;
  const speakQuestions = session && session.config.presentation !== PRESENTATION.text && tts.supported;
  const phase = existing && !existing.skipped && immediate ? 'compare' : 'answer';

  // Timer tick.
  useEffect(() => {
    if (!session || session.status !== SESSION_STATUS.active) return undefined;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [session]);

  const remaining = session ? remainingMs(session, now) : 0;

  // Time-out → finish.
  useEffect(() => {
    if (session?.status === SESSION_STATUS.active && remaining === 0) {
      dispatch({ type: ACTIONS.finish, reason: FINISH_REASON.timeUp });
    }
  }, [session, remaining, dispatch]);

  // Finished (by any route) → review.
  useEffect(() => {
    if (session?.status === SESSION_STATUS.finished) {
      tts.stop();
      stt?.reset();
      navigate(`/interview/review/${session.id}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.status]);

  // New step → clear the draft, stop any voice, optionally read the question.
  const promptText = resolved ? localize(resolved.prompt) : '';
  useEffect(() => {
    setText(existing?.text ?? '');
    setUsedVoice(false);
    stt?.reset();
    if (speakQuestions && promptText && phase === 'answer') tts.speak(promptText);
    else tts.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step?.id]);

  const stopVoice = useCallback(() => {
    tts.stop();
    stt?.reset();
  }, [tts, stt]);

  const submit = () => {
    if (!step || !resolved) return;
    stopVoice();
    dispatch({ type: ACTIONS.answer, stepId: step.id, text: text.trim(), inputMode: usedVoice ? 'voice' : 'typed', keyPoints: resolved.keyPoints });
    if (!immediate) dispatch({ type: ACTIONS.next });
  };

  const skip = () => {
    if (!step) return;
    stopVoice();
    dispatch({ type: ACTIONS.skip, stepId: step.id });
    dispatch({ type: ACTIONS.next });
  };

  const rate = ({ rating, confidence }) => {
    if (!step) return;
    dispatch({ type: ACTIONS.rate, stepId: step.id, rating, confidence });
    const next = { ...(existing ?? {}), rating: rating ?? existing?.rating, confidence: confidence ?? existing?.confidence };
    if (next.rating) {
      recordAttempt({
        attemptId: `${session.id}:${step.id}`,
        questionId: step.questionId,
        sectionId: step.sectionId,
        rating: next.rating,
        coverage: existing?.comparison?.coverage ?? null,
        confidence: next.confidence ?? null,
      });
    }
  };

  const next = () => {
    stopVoice();
    dispatch({ type: ACTIONS.next });
  };

  if (!session || session.status !== SESSION_STATUS.active) {
    return (
      <Container maxWidth={false} sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
          {t('session.notFound')}
        </Typography>
        <Button variant="contained" onClick={() => navigate('/interview')}>
          {t('session.startNew')}
        </Button>
      </Container>
    );
  }

  if (!step || !resolved) {
    return null;
  }

  const isLast = session.index === session.steps.length - 1;

  return (
    <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 }, py: 3 }}>
      <Box sx={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <TimerBar remainingMs={remaining} durationMs={session.durationMs} />

        <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ gap: 1, mb: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            {t('session.question', { position: session.index + 1, total: session.steps.length })}
          </Typography>
          {section ? <Chip size="small" label={localizeUi(section.name)} sx={{ borderInlineStart: `3px solid ${section.color}` }} /> : null}
          {step.isFollowUp ? <Chip size="small" color="info" label={t('session.followUp')} /> : null}
          <KindChip kind={resolved.question.kind} />
          <Chip size="small" variant="outlined" label={`${t('depth.label')}: ${t(`depth.${step.depth}`)}`} />
          <Button size="small" color="inherit" onClick={() => setConfirmEnd(true)} sx={{ marginInlineStart: 'auto', color: 'text.secondary' }}>
            {t('session.endEarly')}
          </Button>
        </Stack>

        <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3, borderInlineStart: `4px solid ${section?.color ?? '#999'}` }}>
          <Typography variant="overline" sx={{ color: 'text.secondary', display: 'block', textAlign: 'start' }}>
            {t('session.interviewerAsks')}
          </Typography>
          {resolved.code ? <CodeBlock code={resolved.code} /> : null}
          {showText ? (
            <Typography variant="h6" component="p" dir={contentDir} lang={contentLanguage} sx={{ fontWeight: 700, textAlign: 'start', lineHeight: 1.6, mb: 1.5 }}>
              {promptText}
            </Typography>
          ) : (
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5, textAlign: 'start' }}>
              {t('session.thinkFirst')}
            </Typography>
          )}
          {tts.supported && (speakQuestions || session.config.presentation !== PRESENTATION.text) ? <VoiceControls tts={tts} text={promptText} /> : null}
          {resolved.star && phase === 'answer' ? (
            <Alert severity="info" sx={{ mt: 2, textAlign: 'start' }}>
              {t('question.starHint')}
            </Alert>
          ) : null}
        </Paper>

        {phase === 'answer' ? (
          <>
            <AnswerInput
              value={text}
              onChange={setText}
              stt={stt}
              onVoiceUsed={() => setUsedVoice(true)}
              // Older persisted sessions may still carry the flag; the hint
              // asks the candidate to answer out loud, so it only shows while
              // answering by voice exists.
              speakingPractice={Boolean(stt) && session.config.speakingPractice}
            />
            <Stack direction="row" flexWrap="wrap" sx={{ gap: 1, mt: 2 }}>
              <Button variant="contained" onClick={submit} disabled={!text.trim() || Boolean(stt?.isRecording)}>
                {t('session.submit')}
              </Button>
              <Button variant="outlined" color="inherit" onClick={skip} disabled={Boolean(stt?.isRecording)}>
                {t('session.skip')}
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <ComparisonPanel answer={existing} resolved={resolved} localizeContent={localize} />
            <SelfRating rating={existing.rating} confidence={existing.confidence} onChange={rate} />
            {!existing.rating ? (
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 1, textAlign: 'start' }}>
                {t('rating.rateToContinue')}
              </Typography>
            ) : null}
            <Button variant="contained" onClick={next} disabled={!existing.rating} sx={{ mt: 2 }}>
              {isLast ? t('session.finish') : t('session.next')}
            </Button>
          </>
        )}

        <Dialog open={confirmEnd} onClose={() => setConfirmEnd(false)}>
          <DialogTitle>{t('session.endEarly')}</DialogTitle>
          <DialogContent>
            <Typography>{t('session.endEarlyConfirm')}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmEnd(false)}>{t('session.cancel')}</Button>
            <Button
              color="error"
              variant="contained"
              onClick={() => {
                setConfirmEnd(false);
                stopVoice();
                dispatch({ type: ACTIONS.finish, reason: FINISH_REASON.endedEarly });
              }}
            >
              {t('session.confirm')}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default InterviewSessionPage;
