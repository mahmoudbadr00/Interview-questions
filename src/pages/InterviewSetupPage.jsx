// pages/InterviewSetupPage.jsx
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { sections, allQuestions, findQuestion } from '../data';
import { DIFFICULTY_ORDER } from '../data/difficulty';
import { useLanguage } from '../i18n/useLanguage';
import {
  DEFAULT_CONFIG,
  DIFFICULTY_CHOICE,
  DURATIONS_MINUTES,
  INTERVIEW_TYPE,
  MAX_QUESTIONS,
  MIN_QUESTIONS,
  PRESENTATION,
  PRESETS,
  QUESTION_COUNTS,
  QUESTION_MODE,
  COMPARE_MODE,
  SOFT_SKILL_SECTION_IDS,
  TECHNICAL_SECTION_IDS,
  applyPreset,
  categoriesForType,
  sanitizeConfig,
} from '../interview/config';
import { buildPlan } from '../interview/plan';
import { useInterviewSession } from '../interview/useInterviewSession';
import { findSession } from '../interview/session';
import { computeStats, loadProgress, planWeight } from '../progress/store';
import { isSpeechSynthesisSupported } from '../voice/support';

const Field = ({ label, hint, children }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.75, textAlign: 'start' }}>
      {label}
    </Typography>
    {children}
    {hint ? (
      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5, textAlign: 'start' }}>
        {hint}
      </Typography>
    ) : null}
  </Box>
);

const Choice = ({ value, onChange, options, render, ariaLabel }) => (
  <ToggleButtonGroup exclusive value={value} onChange={(_, v) => v != null && onChange(v)} size="small" aria-label={ariaLabel} sx={{ flexWrap: 'wrap' }}>
    {options.map((option) => (
      <ToggleButton key={option} value={option} sx={{ textTransform: 'none', px: 1.5 }}>
        {render(option)}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

/** Builds a config from URL hints such as ?category=react, ?due=1, ?retry=<id>. */
const configFromParams = (params) => {
  const config = { ...DEFAULT_CONFIG };
  const category = params.get('category');
  if (category && sections.some((s) => s.id === category)) {
    config.type = SOFT_SKILL_SECTION_IDS.includes(category) ? INTERVIEW_TYPE.softSkills : INTERVIEW_TYPE.technical;
    config.categories = [category];
  }
  const progress = loadProgress();
  if (params.get('due')) {
    const stats = computeStats(progress, allQuestions);
    const ids = stats.dueNow.map((d) => d.questionId);
    if (ids.length) {
      config.type = INTERVIEW_TYPE.custom;
      config.questionIds = ids.slice(0, MAX_QUESTIONS);
      config.categories = [...new Set(ids.map((id) => findQuestion(id)?.sectionId).filter(Boolean))];
      config.questionCount = Math.max(MIN_QUESTIONS, Math.min(MAX_QUESTIONS, ids.length));
    }
  }
  if (params.get('weak')) {
    const stats = computeStats(progress, allQuestions);
    const cats = stats.weak.map((c) => c.sectionId);
    if (cats.length) {
      config.type = INTERVIEW_TYPE.custom;
      config.categories = cats;
    }
  }
  const retry = params.get('retry');
  if (retry) {
    const past = findSession(retry);
    if (past) {
      const ids = [
        ...new Set(
          past.steps
            .filter((s) => {
              const a = past.answers[s.id];
              return !a || a.skipped || a.rating === 'incorrect' || a.rating === 'partial';
            })
            .map((s) => s.questionId)
        ),
      ];
      if (ids.length) {
        config.type = INTERVIEW_TYPE.custom;
        config.questionIds = ids;
        config.categories = [...new Set(ids.map((id) => findQuestion(id)?.sectionId).filter(Boolean))];
        config.questionCount = Math.max(MIN_QUESTIONS, Math.min(MAX_QUESTIONS, ids.length));
        config.compareMode = COMPARE_MODE.immediate;
      }
    }
  }
  return config;
};

const InterviewSetupPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { t, localize, language } = useLanguage();
  const { session, start, discard } = useInterviewSession();
  const [config, setConfig] = useState(() => configFromParams(params));
  const [customCount, setCustomCount] = useState('');
  const ttsSupported = isSpeechSynthesisSupported();

  useEffect(() => {
    if (session?.status === 'finished') navigate(`/interview/review/${session.id}`, { replace: true });
  }, [session, navigate]);

  const update = (patch) =>
    setConfig((prev) => {
      const next = { ...prev, ...patch };
      // Changing what to draw from invalidates an explicit question list
      // (set by "practice what is due" / "retry weak questions").
      if ((patch.categories || patch.type || patch.difficulty) && patch.questionIds === undefined) next.questionIds = null;
      return next;
    });

  const selectableSections = useMemo(() => {
    if (config.type === INTERVIEW_TYPE.softSkills) return [];
    if (config.type === INTERVIEW_TYPE.custom) return sections;
    return sections.filter((s) => TECHNICAL_SECTION_IDS.includes(s.id));
  }, [config.type]);

  const effectiveCategories = useMemo(() => categoriesForType(config.type, config.categories), [config.type, config.categories]);

  const available = useMemo(() => {
    if (config.questionIds?.length) return config.questionIds.length;
    const set = new Set(effectiveCategories);
    return allQuestions.filter((q) => set.has(q.sectionId) && (config.difficulty === 'mixed' || q.difficulty === config.difficulty)).length;
  }, [effectiveCategories, config.difficulty, config.questionIds]);

  const toggleCategory = (id) => {
    const next = config.categories.includes(id) ? config.categories.filter((c) => c !== id) : [...config.categories, id];
    update({ categories: next });
  };

  const canStart = effectiveCategories.length > 0 && available > 0;

  const handleStart = () => {
    const clean = sanitizeConfig(config);
    const progress = loadProgress();
    const plan = buildPlan(clean, { questions: allQuestions, weightOf: (q) => planWeight(progress, q.id) });
    if (!plan.steps.length) return;
    start(clean, plan, clean.language ?? language);
    navigate('/interview/session');
  };

  const countIsPreset = QUESTION_COUNTS.includes(config.questionCount);

  return (
    <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 }, py: 4 }}>
      <Box sx={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <Typography variant="h4" align="center" sx={{ color: 'text.primary', mb: 1, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          {t('interview.title')}
        </Typography>
        <Typography align="center" sx={{ color: 'text.secondary', mb: 3 }}>
          {t('interview.subtitle')}
        </Typography>

        {session?.status === 'active' ? (
          <Alert
            severity="warning"
            sx={{ mb: 3, textAlign: 'start' }}
            action={
              <Stack direction="row" sx={{ gap: 1 }}>
                <Button color="inherit" size="small" onClick={() => navigate('/interview/session')}>
                  {t('interview.resume')}
                </Button>
                <Button color="inherit" size="small" onClick={discard}>
                  {t('interview.discard')}
                </Button>
              </Stack>
            }
          >
            <strong>{t('interview.resumeTitle')}</strong> — {t('interview.resumeHint')}
          </Alert>
        ) : null}

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textAlign: 'start' }}>
          {t('interview.presets')}
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5, mb: 4 }}>
          {PRESETS.map((preset) => (
            <Paper
              key={preset.id}
              component="button"
              type="button"
              onClick={() => {
                setConfig(applyPreset(preset.id));
                setCustomCount('');
              }}
              elevation={1}
              sx={{
                textAlign: 'start',
                p: 2,
                cursor: 'pointer',
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                fontFamily: 'inherit',
                color: 'text.primary',
                '&:hover': { borderColor: 'primary.main', boxShadow: 2 },
                '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main' },
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>{t(`interview.preset.${preset.id}`)}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {t(`interview.preset.${preset.id}.hint`)}
              </Typography>
            </Paper>
          ))}
        </Box>

        <Divider sx={{ mb: 3 }}>{t('interview.customize')}</Divider>

        <Field label={t('interview.type')}>
          <Choice
            value={config.type}
            onChange={(type) => update({ type, categories: type === INTERVIEW_TYPE.softSkills ? [] : config.categories.filter((c) => (type === INTERVIEW_TYPE.custom ? true : TECHNICAL_SECTION_IDS.includes(c))) })}
            options={Object.values(INTERVIEW_TYPE)}
            render={(v) => t(`interview.type.${v}`)}
            ariaLabel={t('interview.type')}
          />
        </Field>

        {selectableSections.length ? (
          <Field
            label={t('interview.categories')}
            hint={config.type === INTERVIEW_TYPE.mixed ? t('interview.categoriesSoftIncluded') : t('interview.categoriesHint')}
          >
            <Stack direction="row" flexWrap="wrap" sx={{ gap: 0.75 }} role="group" aria-label={t('interview.categories')}>
              {selectableSections.map((section) => {
                const selected = config.categories.includes(section.id);
                return (
                  <Chip
                    key={section.id}
                    label={localize(section.name)}
                    onClick={() => toggleCategory(section.id)}
                    color={selected ? 'primary' : 'default'}
                    variant={selected ? 'filled' : 'outlined'}
                    aria-pressed={selected}
                    size="small"
                  />
                );
              })}
            </Stack>
          </Field>
        ) : null}

        <Field label={t('interview.difficulty')}>
          <Choice
            value={config.difficulty}
            onChange={(difficulty) => update({ difficulty })}
            options={DIFFICULTY_CHOICE}
            render={(v) => (DIFFICULTY_ORDER.includes(v) ? t(`difficulty.${v}`) : t('interview.difficulty.mixed'))}
            ariaLabel={t('interview.difficulty')}
          />
        </Field>

        <Field label={t('interview.language')}>
          <Choice
            value={config.language ?? 'ui'}
            onChange={(v) => update({ language: v === 'ui' ? null : v })}
            options={['ui', 'ar', 'en']}
            render={(v) => (v === 'ui' ? t('interview.language.ui') : v === 'ar' ? 'العربية' : 'English')}
            ariaLabel={t('interview.language')}
          />
        </Field>

        <Field label={t('interview.questionCount')} hint={t('interview.available', { count: available })}>
          <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ gap: 1 }}>
            <Choice
              value={countIsPreset && !customCount ? config.questionCount : 'custom'}
              onChange={(v) => {
                if (v === 'custom') setCustomCount(String(config.questionCount));
                else {
                  setCustomCount('');
                  update({ questionCount: v });
                }
              }}
              options={[...QUESTION_COUNTS, 'custom']}
              render={(v) => (v === 'custom' ? t('interview.custom') : v)}
              ariaLabel={t('interview.questionCount')}
            />
            {customCount !== '' || !countIsPreset ? (
              <TextField
                size="small"
                type="number"
                value={customCount === '' ? config.questionCount : customCount}
                onChange={(e) => {
                  setCustomCount(e.target.value);
                  const n = Number(e.target.value);
                  if (n >= MIN_QUESTIONS && n <= MAX_QUESTIONS) update({ questionCount: n });
                }}
                inputProps={{ min: MIN_QUESTIONS, max: MAX_QUESTIONS, 'aria-label': t('interview.questionCount') }}
                sx={{ width: 100 }}
              />
            ) : null}
          </Stack>
        </Field>

        <Field label={t('interview.duration')}>
          <Choice
            value={config.durationMinutes}
            onChange={(durationMinutes) => update({ durationMinutes })}
            options={DURATIONS_MINUTES}
            render={(v) => t('interview.minutes', { count: v })}
            ariaLabel={t('interview.duration')}
          />
        </Field>

        <Field label={t('interview.questionMode')} hint={t(`interview.questionMode.hint.${config.questionMode}`)}>
          <Choice
            value={config.questionMode}
            onChange={(questionMode) => update({ questionMode })}
            options={Object.values(QUESTION_MODE)}
            render={(v) => t(`interview.questionMode.${v}`)}
            ariaLabel={t('interview.questionMode')}
          />
        </Field>

        <Field label={t('interview.compareMode')}>
          <Choice
            value={config.compareMode}
            onChange={(compareMode) => update({ compareMode })}
            options={Object.values(COMPARE_MODE)}
            render={(v) => t(`interview.compareMode.${v}`)}
            ariaLabel={t('interview.compareMode')}
          />
        </Field>

        <Field label={t('interview.presentation')} hint={!ttsSupported ? t('interview.presentationUnsupported') : undefined}>
          <Choice
            value={ttsSupported ? config.presentation : PRESENTATION.text}
            onChange={(presentation) => update({ presentation })}
            options={ttsSupported ? Object.values(PRESENTATION) : [PRESENTATION.text]}
            render={(v) => t(`interview.presentation.${v}`)}
            ariaLabel={t('interview.presentation')}
          />
          <Box sx={{ mt: 1 }}>
            <FormControlLabel
              control={<Switch checked={config.speakingPractice} onChange={(e) => update({ speakingPractice: e.target.checked })} />}
              label={t('interview.speakingPractice')}
            />
          </Box>
        </Field>

        {!canStart ? (
          <Alert severity="warning" sx={{ mb: 2, textAlign: 'start' }}>
            {t('interview.noCategories')}
          </Alert>
        ) : null}

        <Button variant="contained" size="large" fullWidth startIcon={<PlayArrowIcon />} onClick={handleStart} disabled={!canStart} sx={{ py: 1.5, fontWeight: 700 }}>
          {t('interview.start')}
        </Button>
      </Box>
    </Container>
  );
};

export default InterviewSetupPage;
