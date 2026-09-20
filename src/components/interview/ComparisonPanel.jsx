// components/interview/ComparisonPanel.jsx
// Side-by-side "your answer vs expected" with key-point coverage. The
// heuristic disclaimer is always visible.
import { useState } from 'react';
import { Alert, Box, Button, Chip, Divider, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useLanguage } from '../../i18n/useLanguage';
import { suggestionFor } from '../../interview/compare';
import { FEATURES } from '../../lib/features';
import AnswerText from '../AnswerText';
import { Alternatives } from '../QuestionExtras';

const ComparisonPanel = ({ answer, resolved, localizeContent, defaultShowExpected = true }) => {
  const { t, language } = useLanguage();
  const [showExpected, setShowExpected] = useState(defaultShowExpected);
  const localize = localizeContent;
  const separator = language === 'ar' ? '، ' : ', ';

  const isBehavioral = resolved.question.kind === 'behavioral';
  const comparison = answer?.comparison ?? null;
  const skipped = !answer || answer.skipped;

  const missingLabels = comparison ? comparison.missing.map((kp) => localize(kp)).join(separator) : '';
  const coveredLabels = comparison ? comparison.covered.map((kp) => localize(kp)).join(separator) : '';
  const suggestionKey = comparison ? suggestionFor(comparison, { isBehavioral, star: resolved.star }) : 'empty';

  const strengths = [];
  if (comparison && comparison.covered.length) strengths.push(t('compare.strength.covered', { points: coveredLabels }));
  if (comparison && !comparison.tooShort && !comparison.empty && comparison.words >= 40) strengths.push(t('compare.strength.length'));
  if (comparison && !comparison.empty && /\n|[•\-–]\s|\b(first|second|then|finally|أولا|ثانيا|ثم|أخيرا)\b/i.test(answer.text)) {
    strengths.push(t('compare.strength.structure'));
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'start' }}>
        {t('compare.title')}
      </Typography>
      <Alert severity="info" sx={{ mb: 2, textAlign: 'start' }}>
        {isBehavioral ? t('compare.behavioralNote') : t('compare.heuristic')}
      </Alert>

      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.secondary', textAlign: 'start' }}>
        {t('compare.yourAnswer')}
        {/* How the answer was entered only says something while there is more
            than one way to enter it. */}
        {FEATURES.voiceAnswerRecording && answer && !skipped ? (
          <Chip size="small" sx={{ marginInlineStart: 1 }} label={answer.inputMode === 'voice' ? t('compare.viaVoice') : t('compare.viaText')} />
        ) : null}
      </Typography>
      <Box sx={{ p: 1.5, my: 1, borderRadius: 1, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
        {skipped ? (
          <Typography sx={{ color: 'text.secondary', textAlign: 'start' }}>{t('compare.skipped')}</Typography>
        ) : (
          <Typography sx={{ whiteSpace: 'pre-wrap', textAlign: 'start' }}>{answer.text}</Typography>
        )}
      </Box>

      {comparison && comparison.total > 0 ? (
        <>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.secondary', mt: 2, textAlign: 'start' }}>
            {t('compare.keyPoints')} — {t('compare.coverage', { covered: comparison.coveredCount, total: comparison.total })}
          </Typography>
          <Stack sx={{ my: 1, gap: 0.5 }}>
            {resolved.keyPoints.map((kp, i) => {
              const hit = comparison.covered.includes(kp);
              return (
                <Stack key={i} direction="row" alignItems="center" sx={{ gap: 1 }}>
                  {hit ? <CheckCircleIcon color="success" fontSize="small" /> : <RadioButtonUncheckedIcon color="disabled" fontSize="small" />}
                  <Typography variant="body2" sx={{ textAlign: 'start', color: hit ? 'text.primary' : 'text.secondary' }}>
                    {localize(kp)}
                  </Typography>
                  <Chip size="small" variant="outlined" label={hit ? t('compare.covered') : t('compare.missing')} color={hit ? 'success' : 'default'} sx={{ marginInlineStart: 'auto' }} />
                </Stack>
              );
            })}
          </Stack>
        </>
      ) : null}

      {strengths.length ? (
        <>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'success.main', mt: 2, textAlign: 'start' }}>
            {t('compare.strengths')}
          </Typography>
          <Box component="ul" sx={{ paddingInlineStart: 3, my: 0.5 }}>
            {strengths.map((s, i) => (
              <Typography component="li" variant="body2" key={i} sx={{ textAlign: 'start' }}>
                {s}
              </Typography>
            ))}
          </Box>
        </>
      ) : null}

      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'warning.main', mt: 2, textAlign: 'start' }}>
        {t('compare.suggestion')}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'start', mb: 2 }}>
        {t(`compare.suggestion.${suggestionKey}`, { points: missingLabels })}
      </Typography>

      <Divider sx={{ my: 2 }} />
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.secondary', textAlign: 'start' }}>
          {t('compare.expected')}
        </Typography>
        <Button size="small" onClick={() => setShowExpected((v) => !v)} aria-expanded={showExpected}>
          {showExpected ? t('question.hideAnswer') : t('question.showAnswer')}
        </Button>
      </Stack>
      {showExpected ? (
        <Box sx={{ p: 1.5, borderRadius: 1, bgcolor: 'action.hover' }}>
          <AnswerText text={localize(resolved.answer)} />
          {resolved.alternatives ? <Alternatives alternatives={resolved.alternatives} star={resolved.star} /> : null}
        </Box>
      ) : null}
    </Box>
  );
};

export default ComparisonPanel;
