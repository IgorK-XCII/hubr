import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '@/app/providers';
import { Comments } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comments, string, ThunkOptions<string>>(
  'articleComments/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<Comments>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue('fetchCommentsByArticleId error');
    }
  },
);
