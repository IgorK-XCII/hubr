import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '@/app/providers';
import { getArticleData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkOptions<string>>(
  'articleComments/addCommentForArticle',
  async (text, {
    extra, rejectWithValue, getState, dispatch,
  }) => {
    try {
      const state = getState();

      const authData = getUserAuthData(state);
      const article = getArticleData(state);

      if (!authData || !text || !article) {
        return rejectWithValue('no data');
      }

      const { data } = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: authData.id,
        text,
      });

      dispatch(fetchCommentsByArticleId(article.id));

      return data;
    } catch (error) {
      return rejectWithValue('login error');
    }
  },
);
