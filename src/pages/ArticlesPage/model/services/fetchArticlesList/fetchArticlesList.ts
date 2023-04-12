import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
} from '../../selectors/articlesPageSelectors';
import { Articles, ArticleType } from '@/entities/Article';
import { ThunkOptions } from '@/app/providers';
import { addQueryParamsToUrl } from '@/shared/lib/url';

interface FetchArticlesListProps {
  repalce?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Articles,
  FetchArticlesListProps,
  ThunkOptions<string>
>(
  'articlesPage/fetchArticlesList',
  async (_, {
    extra, rejectWithValue, getState,
  }) => {
    const state = getState();
    const limit = getArticlesPageLimit(state);
    const order = getArticlesPageOrder(state);
    const sort = getArticlesPageSort(state);
    const search = getArticlesPageSearch(state);
    const page = getArticlesPageNum(state);
    const type = getArticlesPageType(state);

    try {
      addQueryParamsToUrl({
        sort, order, search, type,
      });

      const { data } = await extra.api.get<Articles>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue('fetchArticlesList error');
    }
  },
);
