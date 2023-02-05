import { createContext, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../config/themeConstants";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) || THEME.LIGHT;

export const themeContextManager = () => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);

  return {
    theme,
    setTheme,
  };
};

export const ThemeContext = createContext<
  ReturnType<typeof themeContextManager>
>({
  theme: THEME.LIGHT,
  setTheme: () => ({}),
});
