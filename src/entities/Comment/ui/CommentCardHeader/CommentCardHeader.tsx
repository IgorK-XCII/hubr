import { FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './CommentCardHeader.module.scss';

interface CommentCardHeaderProps {
  className?: string;
}

export const CommentCardHeader: FC<CommentCardHeaderProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={clsx([cls.commentCardHeader, className])}>
      {children}
    </div>
  );
};
