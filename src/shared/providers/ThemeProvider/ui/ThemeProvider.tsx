import { FC, useLayoutEffect } from 'react';
import { clsx } from '@/shared/lib';
import { ThemeContext, useThemeContextManager } from '../lib/ThemeContext';

export const ThemeProvider: FC = ({ children }) => {
  const themeContext = useThemeContextManager();
  const { theme } = themeContext;

  useLayoutEffect(() => {
    document.body.className = clsx(['app', theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
