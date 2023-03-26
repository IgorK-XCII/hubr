import { createSlice } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services';
import { ArticleSchema } from '../types';

const initialState: ArticleSchema = {
  data: null,
  isLoading: false,
  error: null,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    }).addCase(fetchArticleById.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    }).addCase(fetchArticleById.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
      state.isLoading = false;
    });
  },
});

export const { actions: articleActions, reducer: articleReducers } = articleSlice;
