import { FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types';
import { CommentCardContainer } from '../CommentCardContainer';
import { CommentCardHeader } from '../CommentCardHeader';
import { Avatar, Text } from '@/shared/ui';

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment } = props;

  const { text, user } = comment;
  const { avatar, username } = user;

  return (
    <CommentCardContainer className={clsx([cls.commentCard, className])}>
      <CommentCardHeader>
        {avatar && (
          <Avatar size={30} src={avatar} />
        )}
        <Text text={username} />
      </CommentCardHeader>
      <Text text={text} />
    </CommentCardContainer>
  );
};
