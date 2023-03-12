import { FC, memo } from 'react';
import { clsx } from '@/shared/lib';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error'

interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 theme?: TextTheme;
}

export const Text: FC<TextProps> = memo(({
  className, title, text, theme = 'primary',
}) => (
  <div className={clsx([cls.text, className, cls[theme]])}>
    {title && (
      <p className={cls.title}>{title}</p>
    )}
    {text && (
      <p className={cls.text}>{text}</p>
    )}
  </div>
));
