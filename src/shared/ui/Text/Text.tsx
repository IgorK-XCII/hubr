import { FC, memo } from 'react';
import { clsx } from '@/shared/lib';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error'
type TextAlign = 'left' | 'center' | 'right'

interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 theme?: TextTheme;
 align?: TextAlign;
}

export const Text: FC<TextProps> = memo(({
  className,
  title,
  text,
  theme = 'primary',
  align = 'left',
}) => (
  <div className={clsx([cls.text, className, cls[theme], cls[align]])}>
    {title && (
      <p className={cls.title}>{title}</p>
    )}
    {text && (
      <p className={cls.text}>{text}</p>
    )}
  </div>
));
