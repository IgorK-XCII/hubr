import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticlesPageFilters.module.scss';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useAppDispatch, useAppSelector, useDebounce } from '@/shared/lib';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { articlePageActions } from '../../model/slice';
import {
  Card, Input,
} from '@/shared/ui';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../../model/services';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const view = useAppSelector(getArticlesPageView);
  const order = useAppSelector(getArticlesPageOrder);
  const sort = useAppSelector(getArticlesPageSort);
  const search = useAppSelector(getArticlesPageSearch);
  const type = useAppSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(articlePageActions.setPage(1));
    dispatch(fetchArticlesList({ repalce: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData);

  const handleViewClick = (
    viewMode: ArticleView,
  ) => dispatch(articlePageActions.setView(viewMode));

  const handleChangeOrder = useCallback((
    newOrder: SortOrder,
  ) => {
    dispatch(articlePageActions.setOrder(newOrder));
    fetchData();
  }, [dispatch, fetchData]);

  const handleChangeSort = useCallback((
    newSort: ArticleSortField,
  ) => {
    dispatch(articlePageActions.setSort(newSort));
    fetchData();
  }, [dispatch, fetchData]);

  const handleChangeSearch = useCallback(
    (newSearch) => {
      dispatch(articlePageActions.setSearch(newSearch));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const handleChangeArticlesType = useCallback((newType: ArticleType) => {
    dispatch(articlePageActions.setType(newType));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={clsx([cls.articlesPageFilters, className])}>
      <div className={cls.sortWrapepr}>
        <ArticleSortSelector
          onChangeOrder={handleChangeOrder}
          order={order}
          sort={sort}
          onChangeSort={handleChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={handleViewClick} />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('search')}
          value={search}
          onChange={handleChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChange={handleChangeArticlesType}
        className={cls.tabs}
      />
    </div>
  );
};
