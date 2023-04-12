import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '@/app/providers';
import { Articles } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<Articles, void, ThunkOptions<string>>(
  'articleDetails/fetchArticleRecommendations',
  async (_, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<Articles>('/articles', {
        params: {
          _expand: 'user',
          _limit: 4,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue('fetchArticleRecommendations error');
    }
  },
);
