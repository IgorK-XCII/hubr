import { FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './CommentCardHeader.module.scss';
import { AppLink } from '@/shared/ui';
import { RouterPaths } from '@/shared/config/router';

interface CommentCardHeaderProps {
  className?: string;
  userId?: number;
}

export const CommentCardHeader: FC<CommentCardHeaderProps> = (props) => {
  const { className, children, userId } = props;

  return (
    <AppLink
      to={`${RouterPaths.profile}${userId}`}
      className={clsx([cls.commentCardHeader, className])}
    >
      {children}
    </AppLink>
  );
};
