import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './CommentList.module.scss';
import { Comments } from '../../model/types';
import { Skeleton, Text } from '@/shared/ui';
import { CommentCard } from '../CommentCard';
import { CommentCardContainer } from '../CommentCardContainer';
import { CommentCardHeader } from '../CommentCardHeader';

interface CommentListProps {
  className?: string;
  comments?: Comments | undefined;
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <CommentCardContainer>
        <CommentCardHeader>
          <Skeleton height={30} width={30} border="50%" />
          <Skeleton width={60} height={40} />
        </CommentCardHeader>
        <Skeleton width="100%" height={50} />
      </CommentCardContainer>
    );
  }

  return (
    <div className={clsx([cls.commentList, className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))
        : (
          <Text text={t('noComments')} />
        )}
    </div>
  );
});
