// components/CodeBlock.jsx
import { Box } from '@mui/material';

/** Monospace block that is always left-to-right, even inside an RTL page. */
const CodeBlock = ({ code, sx }) => (
  <Box
    component="pre"
    dir="ltr"
    sx={{
      my: 1.5,
      p: 1.5,
      borderRadius: 1,
      overflowX: 'auto',
      maxWidth: '100%',
      textAlign: 'left',
      fontFamily: 'Consolas, "Courier New", monospace',
      fontSize: '0.85rem',
      lineHeight: 1.6,
      bgcolor: (theme) =>
        theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)',
      border: '1px solid',
      borderColor: 'divider',
      ...sx,
    }}
  >
    <code>{code}</code>
  </Box>
);

export default CodeBlock;
