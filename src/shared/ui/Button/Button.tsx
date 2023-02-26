import { ButtonHTMLAttributes, FC } from 'react';
import { clsx } from '@/shared/lib';
import cls from './Button.module.scss';

type ThemeButton = 'clear' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => (
  <button type="button" {...props} className={clsx([cls.button, cls[theme], className])}>
    {children}
  </button>
);
