import { FC, HTMLAttributes } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={clsx([cls.card, className])} {...restProps}>
      {children}
    </div>
  );
};
