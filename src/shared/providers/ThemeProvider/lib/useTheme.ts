import { useCallback, useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../config/themeConstants";
import { THEME, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(
    () =>
      setTheme((prev) => {
        const newTheme = prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

        return newTheme;
      }),
    []
  );

  return {
    theme,
    toggleTheme,
  };
};
