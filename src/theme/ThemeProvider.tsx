import { FC } from "react";
import { ThemeContext, themeContextManager } from "./ThemeContext";

export const ThemeProvider: FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={themeContextManager()}>
      {children}
    </ThemeContext.Provider>
  );
};
