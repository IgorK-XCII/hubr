import { FC, HTMLAttributes } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './Card.module.scss';

type CardTheme = 'normal' | 'outlined'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: CardTheme;
}

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    theme = 'normal',
    ...restProps
  } = props;

  return (
    <div className={clsx([cls.card, className, cls[theme]])} {...restProps}>
      {children}
    </div>
  );
};
