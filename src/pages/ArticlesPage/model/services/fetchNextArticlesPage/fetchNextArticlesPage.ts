import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { ThunkOptions } from '@/app/providers';
import { fetchArticlesList } from '../fetchArticlesList';
import { articlePageActions } from '../../slice';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkOptions<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, {
    getState, dispatch,
  }) => {
    const state = getState();
    const hasMore = getArticlesPageHasMore(state);
    const page = getArticlesPageNum(state);
    const isLoading = getArticlesPageIsLoading(state);

    if (!hasMore || isLoading) return;

    const nextPage = page + 1;

    dispatch(fetchArticlesList({}));
    dispatch(articlePageActions.setPage(nextPage));
  },
);
