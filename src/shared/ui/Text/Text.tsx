import { FC, memo } from 'react';
import { clsx } from '@/shared/lib';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type TextAlign = 'left' | 'center' | 'right';
type TextSize = 'm' | 'l';

interface TextProps {
 className?: string;
 title?: string;
 text?: string | number;
 theme?: TextTheme;
 align?: TextAlign;
 size?: TextSize;
}

export const Text: FC<TextProps> = memo(({
  className,
  title,
  text,
  theme = 'primary',
  align = 'left',
  size = 'm',
}) => (
  <div className={
    clsx(
      [
        cls.text,
        className,
        cls[theme],
        cls[align],
        cls[size],
      ],
    )
}
  >
    {title && (
      <p className={cls.title}>{title}</p>
    )}
    {text && (
      <p className={cls.text}>{text}</p>
    )}
  </div>
));
