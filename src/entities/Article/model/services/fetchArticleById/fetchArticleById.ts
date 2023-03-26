import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '@/app/providers';
import { Article } from '../../types';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkOptions<string>>(
  'article/fetchArticleById',
  async (id, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get(`/articles/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue('fetchArticleById error');
    }
  },
);
