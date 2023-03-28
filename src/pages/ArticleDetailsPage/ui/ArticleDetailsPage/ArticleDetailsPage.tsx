import { FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities';

interface ArticleDetailsPageProps {
  className?: string;
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx([cls.articleDetailsPage, className])}>
      <ArticleDetails />
    </div>
  );
};
