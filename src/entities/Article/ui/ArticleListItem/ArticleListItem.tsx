import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleBLockType, ArticleTextBlock as ArticleTextBlockType, ArticleView,
} from '../../model';
import {
  AppLink,
  Avatar, Button, Card, Icon, Text,
} from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleTextBlock } from '../ArticleTextBlock';
import { RouterPaths } from '@/shared/config/router';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const {
    className, article, view, target,
  } = props;
  const { t } = useTranslation();
  const { user } = article;

  const linkPath = `${RouterPaths.articleDetails}${article.id}`;

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
            <AppLink to={linkPath} target={target}>
              <Button theme="outline">
                {t('readNext')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx([className, cls[view]])}>
      <AppLink to={linkPath} target={target}>
        <Card>
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
      </AppLink>
    </div>
  );
};
