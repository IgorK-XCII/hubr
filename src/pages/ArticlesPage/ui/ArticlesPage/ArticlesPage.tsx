import { FC, useEffect } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticlesPage.module.scss';
import { ArticleList, ArticleView } from '@/entities/Article';
import { LazyReducers } from '@/app/providers';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice';
import {
  isStorybookMode, useAppDispatch, useAppSelector, useLazyReducersLoader,
} from '@/shared/lib';
import { fetchArticlesList } from '../../model/services';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

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

    dispatch(fetchArticlesList());
  }, [dispatch]);

  const handleViewClick = (
    viewMode: ArticleView,
  ) => dispatch(articlePageActions.setView(viewMode));

  return (
    <div className={clsx([cls.articlePage, className])}>
      <ArticleViewSelector view={view} onViewClick={handleViewClick} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </div>
  );
};
