import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams();
  const isEdit = Boolean(id);

  return (
    <div className={clsx([cls.articleEditPage, className])} />
  );
};
