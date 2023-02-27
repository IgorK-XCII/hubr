import { FC } from 'react';
import { clsx } from '@/shared/lib';
import { useTheme, THEME } from '@/shared/providers/ThemeProvider';
import ThemeLightIcon from '@/shared/assets/icons/theme-light.svg';
import ThemeDarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button } from '@/shared/ui';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={clsx([className])}
      onClick={toggleTheme}
      theme="clear"
    >
      {theme === THEME.DARK ? <ThemeDarkIcon /> : <ThemeLightIcon />}
    </Button>
  );
};
