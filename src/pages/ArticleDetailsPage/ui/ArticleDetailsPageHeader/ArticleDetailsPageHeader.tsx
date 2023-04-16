import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button } from '@/shared/ui';
import { RouterPaths } from '@/shared/config/router';
import { useAppSelector } from '@/shared/lib';
import { getCanEditArticle } from '../../model/selectors';
import { getArticleData } from '@/entities/Article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useAppSelector(getCanEditArticle);
  const article = useAppSelector(getArticleData);

  const handleBackClick = () => {
    navigate(RouterPaths.articles);
  };

  const handleEdit = () => {
    if (article) navigate(`${RouterPaths.articleDetails}${article.id}/edit`);
  };

  return (
    <div className={clsx([cls.articleDetailsPageHeader, className])}>
      <Button theme="outline" onClick={handleBackClick}>
        {t('back')}
      </Button>
      {canEdit && (
        <Button theme="outline" onClick={handleEdit}>
          {t('edit')}
        </Button>
      )}
    </div>
  );
};
