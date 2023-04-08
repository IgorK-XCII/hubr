import { createAsyncThunk } from '@reduxjs/toolkit';
import { Articles } from '@/entities/Article';
import { ThunkOptions } from '@/app/providers';

export const fetchArticlesList = createAsyncThunk<Articles, void, ThunkOptions<string>>(
  'articlesPage/fetchArticlesList',
  async (_, {
    extra, rejectWithValue,
  }) => {
    try {
      const { data } = await extra.api.get<Articles>('/articles', {
        params: {
          _expand: 'user',
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue('fetchArticlesList error');
    }
  },
);
