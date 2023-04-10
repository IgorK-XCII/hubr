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
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setHasMore: (state, { payload }: PayloadAction<boolean>) => {
      state.hasMore = payload;
    },
    initState: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      state.limit = payload === ArticleView.LIST ? 4 : 9;
      state._inited = true;
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
        articlesAdapter.addMany(state, payload);
        state.hasMore = Boolean(payload.length);
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
