import { FC } from 'react';
import { ThemeContext, themeContextManager } from '../lib/ThemeContext';

export const ThemeProvider: FC = ({ children }) => (
  <ThemeContext.Provider value={themeContextManager()}>
    {children}
  </ThemeContext.Provider>
);
