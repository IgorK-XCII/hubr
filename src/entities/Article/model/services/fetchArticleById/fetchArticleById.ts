import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '@/app/providers';
import { Article } from '../../types';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkOptions<string>>(
  'article/fetchArticleById',
  async (id, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<Article>(`/articles/${id}`, {
        params: {
          _expand: 'user',
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue('fetchArticleById error');
    }
  },
);
