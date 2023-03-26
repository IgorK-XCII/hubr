import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.articlePage, className])} />
  );
};
