import { FC } from 'react';
import { clsx } from '@/shared/lib';
import { Card, Skeleton } from '@/shared/ui';
import { ArticleView } from '../../model';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  view: ArticleView;
  className?: string;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
  const { view, className } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={clsx([className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton
              height={30}
              width={30}
              border="50%"
            />
            <Skeleton
              width={150}
              height={30}
              className={cls.username}
            />
            <Skeleton
              width={150}
              height={30}
              className={cls.date}
            />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx([className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  );
};
