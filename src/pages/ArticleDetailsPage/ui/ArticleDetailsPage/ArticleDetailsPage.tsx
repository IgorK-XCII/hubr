import { FC, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleDetailsPage.module.scss';
import { Button, Text } from '@/shared/ui';
import { ArticleDetails, ArticleList } from '@/entities/Article';
import { CommentList } from '@/entities/Comment';
import {
  isStorybookMode,
  useAppDispatch,
  useAppSelector,
  useLazyReducersLoader,
} from '@/shared/lib';
import { LazyReducers } from '@/app/providers';
import {
  articleDetailsPageReducer,
  getArticleComments,
  getArticleRecommendations,
} from '../../model/slices';
import {
  getArticleCommentsIsLoadingFlg,
  getArticleRecommendationsIsLoadingFlg,
} from '../../model/selectors';
import {
  addCommentForArticle,
  fetchArticleRecommendations,
  fetchCommentsByArticleId,
} from '../../model/services';
import { AddCommentForm } from '@/features/AddCommentForm';
import { RouterPaths } from '@/shared/config/router';
import { Page } from '@/widgets';

interface ArticleDetailsPageProps {
  className?: string;
}

const lazyReducers: LazyReducers = {
  articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams();
  const comments = useAppSelector(getArticleComments.selectAll);
  const commentsIsLoading = useAppSelector(getArticleCommentsIsLoadingFlg);
  const recommendationsIsLoading = useAppSelector(getArticleRecommendationsIsLoadingFlg);
  const recommendations = useAppSelector(getArticleRecommendations.selectAll);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(RouterPaths.articles);
  };

  useEffect(() => {
    if (isStorybookMode()) return;

    if (id) dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  }, [dispatch, id]);

  useLazyReducersLoader(lazyReducers);

  const handleAddComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <Page className={clsx([cls.articleDetailsPage, className])}>
      <Button theme="outline" onClick={handleBackClick}>
        {t('back')}
      </Button>
      <ArticleDetails id={id} />
      <Text
        size="l"
        title={t('recommentations')}
        className={cls.recommentationsTitle}
      />
      <ArticleList
        articles={recommendations}
        isLoading={recommendationsIsLoading}
        className={cls.recommentations}
        target="_blank"
      />
      <Text
        size="l"
        title={t('comments')}
        className={cls.commentTitle}
      />
      <AddCommentForm className={cls.addCommentForm} onSendComment={handleAddComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </Page>
  );
};
