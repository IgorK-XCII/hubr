import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from '@/shared/ui';
import { ArticleDetails } from '@/entities/Article';
import { CommentList } from '@/entities/Comment';
import {
  isStorybookMode, useAppDispatch, useAppSelector, useLazyReducersLoader,
} from '@/shared/lib';
import { LazyReducers } from '@/app/providers';
import { articleCommentsReducer, getArticleComments } from '../../model/slice';
import { getArticleCommentsError, getArticleCommentsIsLoadingFlg } from '../../model/selectors';
import { fetchCommentsByArticleId } from '../../model/services';

interface ArticleDetailsPageProps {
  className?: string;
}

const lazyReducers: LazyReducers = {
  articleComments: articleCommentsReducer,
};

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleCommentsIsLoadingFlg);
  // const error = useAppSelector(getArticleCommentsError);

  useEffect(() => {
    if (isStorybookMode()) return;

    if (id) dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  useLazyReducersLoader(lazyReducers);

  return (
    <div className={clsx([cls.articleDetailsPage, className])}>
      <ArticleDetails id={id} />
      <Text title={t('comments')} className={cls.commentTitle} />
      <CommentList
        isLoading={isLoading}
        comments={comments}
      />
    </div>
  );
};
