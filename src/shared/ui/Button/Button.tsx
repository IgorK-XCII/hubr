import { ButtonHTMLAttributes, FC, memo } from 'react';
import { clsx } from '@/shared/lib';
import cls from './Button.module.scss';

type ThemeButton =
  | 'clear'
  | 'clear-inverted'
  | 'outline'
  | 'outline-red'
  | 'background'
  | 'background-inverted';

const ButtonSize = {
  m: 'size_m',
  l: 'size_l',
  xl: 'size_xl',
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: keyof typeof ButtonSize
}

export const Button: FC<ButtonProps> = memo(({
  className,
  children,
  theme = 'outline',
  square,
  size = 'm',
  ...props
}) => {
  const mods = {
    [cls.square]: square,
  };

  return (
    <button
      {...props}
      type="button"
      className={clsx([
        cls.button,
        cls[theme],
        className,
        cls[ButtonSize[size]],
      ], mods)}
    >
      {children}
    </button>
  );
});
