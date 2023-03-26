import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities';

interface ArticleDetailsPageProps {
  className?: string;
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.articleDetailsPage, className])}>
      <ArticleDetails />
    </div>
  );
};
