import { FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleImageBLock.module.scss';
import { ArticleImageBlock as ArticleImageBlockType } from '../../model';
import { Text } from '@/shared/ui';

interface ArticleImageBLockProps {
  className?: string;
  block: ArticleImageBlockType;
}

export const ArticleImageBLock: FC<ArticleImageBLockProps> = (props) => {
  const { className, block } = props;
  const { src, title } = block;

  return (
    <div className={clsx([cls.articleImageBLock, className])}>
      <img src={src} alt={title} />
      {title && (
        <Text text={title} className={cls.title} />
      )}
    </div>
  );
};
