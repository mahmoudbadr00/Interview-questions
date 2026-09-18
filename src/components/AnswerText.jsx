// components/AnswerText.jsx
import { Box, Typography } from '@mui/material';
import CodeBlock from './CodeBlock';

const FENCE = /```(?:[a-zA-Z]*)\n?([\s\S]*?)```/g;

/**
 * Splits an answer into plain-text and fenced-code segments.
 * Code is always rendered left-to-right, even inside an RTL page.
 */
const parseSegments = (text) => {
  const segments = [];
  let lastIndex = 0;
  let match;

  FENCE.lastIndex = 0;
  while ((match = FENCE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'code', value: match[1].replace(/\n$/, '') });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return segments;
};

const AnswerText = ({ text, variant = 'body1' }) => {
  const segments = parseSegments(text ?? '');

  return (
    <Box sx={{ color: 'text.primary', lineHeight: 1.8 }}>
      {segments.map((segment, index) =>
        segment.type === 'code' ? (
          <CodeBlock key={index} code={segment.value} />
        ) : (
          <Typography
            key={index}
            component="div"
            variant={variant}
            sx={{ whiteSpace: 'pre-wrap', textAlign: 'start', lineHeight: 1.8 }}
          >
            {segment.value.replace(/^\n+|\n+$/g, '')}
          </Typography>
        )
      )}
    </Box>
  );
};

export default AnswerText;
