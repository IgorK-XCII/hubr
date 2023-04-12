import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticlesPageIsInit,
} from '../../selectors/articlesPageSelectors';
import { ThunkOptions } from '@/app/providers';
import { articlePageActions } from '../../slice';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

interface initArticlesPageOptions {
  view: ArticleView;
  params: URLSearchParams;
}

export const initArticlesPage = createAsyncThunk<
  void,
  initArticlesPageOptions,
  ThunkOptions<string>
>(
  'articlesPage/initArticlesPage',
  (options, {
    getState, dispatch,
  }) => {
    const state = getState();
    const isInited = getArticlesPageIsInit(state);
    const { view, params } = options;

    if (isInited) return;

    const order = params.get('order') as SortOrder;
    const sort = params.get('sort') as ArticleSortField;
    const search = params.get('search');
    const type = params.get('type') as ArticleType;

    dispatch(
      articlePageActions.initState({
        view,
        order,
        sort,
        search,
        type,
      }),
    );
  },
);
