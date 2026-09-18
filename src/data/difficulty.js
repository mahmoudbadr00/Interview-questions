// data/difficulty.js
// Single source of truth for difficulty values used by content and UI filters.
export const DIFFICULTY = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced',
};

export const DIFFICULTY_ORDER = [
  DIFFICULTY.beginner,
  DIFFICULTY.intermediate,
  DIFFICULTY.advanced,
];

// Chip colours map onto MUI palette keys so light/dark mode keep working.
export const DIFFICULTY_COLOR = {
  [DIFFICULTY.beginner]: 'success',
  [DIFFICULTY.intermediate]: 'warning',
  [DIFFICULTY.advanced]: 'error',
};

export const difficultyRank = (value) => {
  const index = DIFFICULTY_ORDER.indexOf(value);
  return index === -1 ? DIFFICULTY_ORDER.length : index;
};
