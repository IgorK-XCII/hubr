import { FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './CommentCardContainer.module.scss';

interface CommentCardContainerProps {
  className?: string;
}

export const CommentCardContainer: FC<CommentCardContainerProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={clsx([cls.commentCardContainer, className])}>
      {children}
    </div>
  );
};
