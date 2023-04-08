import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/Article';
import { RootState } from '@/app/providers';
import { ArticlePageSchema } from '../types';
import { fetchArticlesList } from '../services';
import { getArticlesViewFromStorage } from '@/features/ArticleViewSelector';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<RootState>(
  (state) => state.articlePage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'articlePage',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: null,
    ids: [],
    entities: {},
    view: getArticlesViewFromStorage(),
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, payload);
      })
      .addCase(fetchArticlesList.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.error = payload;
        }
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;
