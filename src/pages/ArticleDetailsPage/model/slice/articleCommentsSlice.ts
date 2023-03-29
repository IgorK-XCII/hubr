import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Comment } from '@/entities/Comment';
import { RootState } from '@/app/providers';
import { ArticleCommentsSchema } from '../types';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<RootState>(
  (state) => state.articleComments || commentsAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
  name: 'articleComments',
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: null,
    ids: [],
    entities: { },
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
        if (payload) {
          state.error = payload;
        }
        state.isLoading = false;
      });
  },
});

export const {
  reducer: articleCommentsReducer,
} = articleCommentsSlice;
