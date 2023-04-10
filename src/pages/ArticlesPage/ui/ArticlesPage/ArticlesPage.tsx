import { FC, useCallback, useEffect } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticleView } from '@/entities/Article';
import { LazyReducers } from '@/app/providers';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice';
import {
  isStorybookMode, useAppDispatch, useAppSelector, useLazyReducersLoader,
} from '@/shared/lib';
import { fetchNextArticlesPage, initArticlesPage } from '../../model/services';
import {
  getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors';
import { ArticleViewSelector, getArticlesViewFromStorage } from '@/features/ArticleViewSelector';
import { Page } from '@/widgets';

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

  useLazyReducersLoader(lazyReducers, false);

  useEffect(() => {
    if (isStorybookMode()) return;

    dispatch(initArticlesPage(getArticlesViewFromStorage()));
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
