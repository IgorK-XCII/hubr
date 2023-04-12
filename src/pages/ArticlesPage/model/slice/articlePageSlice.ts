import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Article, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import { RootState } from '@/app/providers';
import { ArticlePageSchema } from '../types';
import { fetchArticlesList } from '../services';
import { getArticlesViewFromStorage } from '@/features/ArticleViewSelector';
import { SortOrder } from '@/shared/types';

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
    sort: ArticleSortField.CREATED,
    order: SortOrder.ASC,
    search: '',
    limit: 4,
    type: ArticleType.ALL,
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
    setOrder: (state, { payload }: PayloadAction<SortOrder>) => {
      state.order = payload;
    },
    setSort: (state, { payload }: PayloadAction<ArticleSortField>) => {
      state.sort = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setType: (state, { payload }: PayloadAction<ArticleType>) => {
      state.type = payload;
    },
    initState: (state, { payload }: PayloadAction<{
      view: ArticleView;
      order: SortOrder | null;
      sort: ArticleSortField | null;
      search: string | null;
      type: ArticleType | null;
    }>) => {
      const {
        view, order, sort, search, type,
      } = payload;

      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 9;
      state.sort = sort ?? state.sort;
      state.order = order ?? state.order;
      state.search = search ?? state.search;
      state.type = type ?? state.type;
      state._inited = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state, { meta }) => {
        state.isLoading = true;
        state.error = null;

        if (meta.arg.repalce) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false;
        state.hasMore = payload.length >= state.limit;

        if (meta.arg.repalce) {
          articlesAdapter.setAll(state, payload);
        } else {
          articlesAdapter.addMany(state, payload);
        }
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
