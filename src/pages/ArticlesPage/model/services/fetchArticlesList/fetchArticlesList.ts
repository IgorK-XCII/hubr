import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';
import { Articles } from '@/entities/Article';
import { ThunkOptions } from '@/app/providers';

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Articles,
  FetchArticlesListProps,
  ThunkOptions<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, {
    extra, rejectWithValue, getState,
  }) => {
    const { page = 1 } = props;

    const state = getState();
    const limit = getArticlesPageLimit(state);

    try {
      const { data } = await extra.api.get<Articles>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue('fetchArticlesList error');
    }
  },
);
