import { FC, useCallback, useEffect } from 'react';
import { log } from 'console';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticleView } from '@/entities/Article';
import { LazyReducers } from '@/app/providers';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice';
import {
  isStorybookMode, useAppDispatch, useAppSelector, useLast, useLazyReducersLoader,
} from '@/shared/lib';
import { fetchArticlesList, fetchNextArticlesPage } from '../../model/services';
import {
  getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView,
} from '../../model/selectors';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { Page } from '@/shared/ui';

interface ArticlePageProps {
  className?: string;
}

const lazyReducers: LazyReducers = {
  articlePage: articlePageReducer,
};

export const ArticlesPage: FC<ArticlePageProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const articles = useAppSelector(getArticles.selectAll);
  const isLoading = useAppSelector(getArticlesPageIsLoading);
  const view = useAppSelector(getArticlesPageView);

  useLazyReducersLoader(lazyReducers);

  useEffect(() => {
    if (isStorybookMode()) return;

    dispatch(articlePageActions.initState());
  }, [dispatch]);

  const handleViewClick = (
    viewMode: ArticleView,
  ) => dispatch(articlePageActions.setView(viewMode));

  const handleLoadNext = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <Page
      className={clsx([cls.articlePage, className])}
      onScrollEnd={handleLoadNext}
    >
      <ArticleViewSelector view={view} onViewClick={handleViewClick} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </Page>
  );
};
