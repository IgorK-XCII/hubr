import { FC, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticlesPage.module.scss';
import { ArticleList } from '@/entities/Article';
import { LazyReducers } from '@/app/providers';
import { articlePageReducer, getArticles } from '../../model/slice';
import {
  isStorybookMode, useAppDispatch, useAppSelector, useLazyReducersLoader,
} from '@/shared/lib';
import { fetchNextArticlesPage, initArticlesPage } from '../../model/services';
import {
  getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors';
import { getArticlesViewFromStorage } from '@/features/ArticleViewSelector';
import { Page } from '@/widgets';
import { ArticlesPageFilters } from '../ArticlesPageFilters';

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
  const [searchParams] = useSearchParams();

  useLazyReducersLoader(lazyReducers, false);

  useEffect(() => {
    if (isStorybookMode()) return;

    dispatch(initArticlesPage({
      view: getArticlesViewFromStorage(),
      params: searchParams,
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleLoadNext = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <Page
      className={clsx([cls.articlePage, className])}
      onScrollEnd={handleLoadNext}
    >
      <ArticlesPageFilters />
      <ArticleList
        view={view}
        articles={articles}
        isLoading={isLoading}
        className={cls.list}
      />
    </Page>
  );
};
