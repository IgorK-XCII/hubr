import { RootState } from '@/app/providers';
import { getArticlesViewFromStorage } from '@/features/ArticleViewSelector';

export const getArticlesPageIsLoading = (state: RootState) => state.articlePage?.isLoading ?? false;
export const getArticlesPageError = (staet: RootState) => staet.articlePage?.error ?? null;
export const getArticlesPageView = (
  staet: RootState,
) => staet.articlePage?.view ?? getArticlesViewFromStorage();
