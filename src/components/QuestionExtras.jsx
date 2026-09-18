// components/QuestionExtras.jsx
// Learning-mode add-ons under an answer: key terms, follow-ups and (for
// behavioral questions) several strong sample answers.
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useLanguage } from '../i18n/useLanguage';
import AnswerText from './AnswerText';

const SectionTitle = ({ children }) => (
  <Typography variant="subtitle2" sx={{ mt: 2.5, mb: 1, fontWeight: 700, color: 'text.secondary', textAlign: 'start' }}>
    {children}
  </Typography>
);

export const KeyTerms = ({ keyPoints }) => {
  const { t, localize } = useLanguage();
  if (!keyPoints?.length) return null;
  return (
    <>
      <SectionTitle>{t('question.keyTerms')}</SectionTitle>
      <Stack direction="row" flexWrap="wrap" sx={{ gap: 0.75 }}>
        {keyPoints.map((kp, i) => (
          <Chip key={i} label={localize(kp)} size="small" variant="outlined" color="primary" />
        ))}
      </Stack>
    </>
  );
};

export const FollowUps = ({ followUps }) => {
  const { t, localize } = useLanguage();
  if (!followUps?.length) return null;
  return (
    <>
      <SectionTitle>{t('question.followUps')}</SectionTitle>
      {followUps.map((fu) => (
        <Accordion key={fu.id} disableGutters elevation={0} sx={{ border: '1px solid', borderColor: 'divider', mb: 1, '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography sx={{ textAlign: 'start', fontWeight: 600 }}>{localize(fu.question)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5, textAlign: 'start' }}>
              {t('question.followUpAnswer')}
            </Typography>
            <AnswerText text={localize(fu.answer)} />
            {fu.keyPoints?.length ? <KeyTerms keyPoints={fu.keyPoints} /> : null}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export const Alternatives = ({ alternatives, star }) => {
  const { t, localize } = useLanguage();
  if (!alternatives?.length) return null;
  return (
    <>
      <SectionTitle>{t('question.alternatives')}</SectionTitle>
      <Alert severity="info" sx={{ mb: 1.5, textAlign: 'start' }}>
        {t('question.alternativesNote')}
        {star ? ` ${t('question.starHint')}` : ''}
      </Alert>
      {alternatives.map((alt, i) => (
        <Accordion key={i} disableGutters elevation={0} sx={{ border: '1px solid', borderColor: 'divider', mb: 1, '&:before': { display: 'none' } }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography sx={{ textAlign: 'start', fontWeight: 600 }}>{localize(alt.label)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AnswerText text={localize(alt.answer)} />
            <Box sx={{ mt: 1.5, p: 1.5, borderRadius: 1, bgcolor: 'action.hover' }}>
              <Typography variant="body2" sx={{ textAlign: 'start' }}>
                <strong>{t('question.why')}:</strong> {localize(alt.why)}
              </Typography>
              {alt.avoid ? (
                <Typography variant="body2" sx={{ textAlign: 'start', mt: 0.75, color: 'error.main' }}>
                  <strong>{t('question.avoid')}:</strong> {localize(alt.avoid)}
                </Typography>
              ) : null}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

/** Everything below the main answer for one question. */
const QuestionExtras = ({ question }) => (
  <>
    <KeyTerms keyPoints={question.keyPoints} />
    <Alternatives alternatives={question.alternatives} star={question.star} />
    <FollowUps followUps={question.followUps} />
  </>
);

export default QuestionExtras;
