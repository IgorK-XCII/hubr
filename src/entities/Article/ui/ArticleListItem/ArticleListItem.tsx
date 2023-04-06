import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleBLockType, ArticleTextBlock as ArticleTextBlockType, ArticleView,
} from '../../model';
import {
  Avatar, Button, Card, Icon, Text,
} from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleTextBlock } from '../ArticleTextBlock';
import { RouterPaths } from '@/shared/config/router';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = article;

  const handleOpenArticle = () => {
    navigate(`${RouterPaths.articleDetails}${article.id}`);
  };

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={article.views} className={cls.views} />
      <Icon svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks
      .find((block) => block.type === ArticleBLockType.TEXT) as ArticleTextBlockType;

    return (
      <div className={clsx([className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={user.avatar} />
            <Text text={user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <Button theme="outline" onClick={handleOpenArticle}>
              {t('readNext')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx([className, cls[view]])}>
      <Card onClick={handleOpenArticle}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
};
