import { useCallback, useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../config/themeConstants';
import { THEME, ThemeContext } from './ThemeContext';

const getNewTheme = (oldTheme: THEME) => {
  switch (oldTheme) {
    case THEME.DARK:
      return THEME.LIGHT;
    case THEME.LIGHT:
      return THEME.ORANGE;
    case THEME.ORANGE:
      return THEME.DARK;
    default:
      return THEME.LIGHT;
  }
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(
    () => setTheme((prev) => {
      const newTheme = getNewTheme(prev);

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

      return newTheme;
    }),
    [setTheme],
  );

  return {
    theme,
    toggleTheme,
  };
};
