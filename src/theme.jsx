import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Arabic keeps the original Tajawal identity; English uses the Open Sans face
// that is already loaded in index.html.
const FONTS = {
  ar: 'Tajawal, Arial, sans-serif',
  en: '"Open Sans", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          searchMenu: {
            main: "#F6F9FC",
          },
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          searchMenu: {
            main: "#252b32",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const readStoredMode = () => {
  try {
    return localStorage.getItem("mode") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
};

/**
 * Builds the MUI theme.
 * @param {'ltr'|'rtl'} direction  drives `theme.direction` so MUI components
 *                                 and CSS logical properties mirror correctly.
 * @param {'ar'|'en'} language     selects the typeface.
 */
export const useMode = (direction = "rtl", language = "ar") => {
  const [mode, setMode] = useState(readStoredMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          try {
            localStorage.setItem("mode", next);
          } catch {
            // Persisting the theme is optional; never break rendering over it.
          }
          return next;
        }),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...getDesignTokens(mode),
        direction,
        typography: { fontFamily: FONTS[language] ?? FONTS.ar },
      }),
    [mode, direction, language]
  );

  return [theme, colorMode];
};
