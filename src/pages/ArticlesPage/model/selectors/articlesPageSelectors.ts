import { RootState } from '@/app/providers';
import { getArticlesViewFromStorage } from '@/features/ArticleViewSelector';

export const getArticlesPageIsLoading = (state: RootState) => state.articlePage?.isLoading ?? false;
export const getArticlesPageError = (state: RootState) => state.articlePage?.error ?? null;
export const getArticlesPageView = (
  state: RootState,
) => state.articlePage?.view ?? getArticlesViewFromStorage();
export const getArticlesPageLimit = (state: RootState) => state.articlePage?.limit ?? 9;
export const getArticlesPageHasMore = (state: RootState) => state.articlePage?.hasMore ?? false;
export const getArticlesPageNum = (state: RootState) => state.articlePage?.page ?? 1;
