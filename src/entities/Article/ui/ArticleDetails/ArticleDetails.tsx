import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleDetails.module.scss';
import { LazyReducers } from '@/app/providers';
import { articleReducer, fetchArticleById } from '../../model';
import {
  isStorybookMode, useAppDispatch, useAppSelector, useLazyReducersLoader,
} from '@/shared/lib';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors';
import {
  Avatar, Icon, Skeleton, Text,
} from '@/shared/ui';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { ArticleBlocksContainer } from '../ArticleBlocks';

interface ArticleDetailsProps {
  className?: string;
}

const lazyReducers: LazyReducers = {
  article: articleReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className } = props;
  const { id } = useParams();
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const article = useAppSelector(getArticleData);
  const isLoading = useAppSelector(getArticleIsLoading);
  const error = useAppSelector(getArticleError);

  useEffect(() => {
    if (isStorybookMode()) return;

    if (id) dispatch(fetchArticleById(id));
  }, [id, dispatch]);

  useLazyReducersLoader(lazyReducers);

  if (isLoading) {
    return (
      <div className={cls.skeletonContainer}>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </div>
    );
  }

  if (error) {
    return <Text title={t('error')} align="center" />;
  }

  return (
    <div className={clsx([cls.articleDetails, className])}>
      <Avatar
        size={200}
        src={article?.img}
        className={cls.avatar}
      />
      <Text
        title={article?.title}
        text={article?.subtitle}
        size="l"
      />
      <div className={cls.articleInfo}>
        <Icon svg={EyeIcon} />
        <Text text={article?.views} />
      </div>
      <div className={cls.articleInfo}>
        <Icon svg={CalendarIcon} />
        <Text text={article?.createdAt} />
      </div>
      <ArticleBlocksContainer blocks={article?.blocks} />
    </div>
  );
});
