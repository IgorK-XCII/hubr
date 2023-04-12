import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers';
import { Article } from '@/entities/Article';
import { ArticleDetailsRecommendationsSchema } from '../types';
import { fetchArticleRecommendations } from '../services';

const recomendadionsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recomendadionsAdapter.getSelectors<RootState>(
  (state) => state.articleDetailsPage?.recommendations || recomendadionsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecomendations',
  initialState: recomendadionsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    entities: {},
    ids: [],
    error: null,
    isLoadign: false,
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoadign = true;
        state.error = null;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, { payload }) => {
        state.isLoadign = false;
        recomendadionsAdapter.setAll(state, payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, { payload }) => {
        state.isLoadign = false;

        if (payload) {
          state.error = payload;
        }
      });
  },
});

export const {
  reducer: articleDetailsPageRecommendationsReducer,
  actions: articleDetailsPageRecommendationsActions,
} = articleDetailsPageRecommendationsSlice;
