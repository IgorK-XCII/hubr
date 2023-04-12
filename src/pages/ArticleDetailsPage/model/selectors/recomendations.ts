import { RootState } from '@/app/providers';

export const getArticleRecommendationsIsLoadingFlg = (
  state: RootState,
) => state.articleDetailsPage?.recommendations.isLoadign ?? false;

export const getArticleRecommendationsError = (
  state: RootState,
) => state.articleDetailsPage?.recommendations.error ?? null;
