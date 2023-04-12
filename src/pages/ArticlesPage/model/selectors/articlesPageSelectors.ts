import { RootState } from '@/app/providers';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { getArticlesViewFromStorage } from '@/features/ArticleViewSelector';
import { SortOrder } from '@/shared/types';

export const getArticlesPageIsLoading = (state: RootState) => state.articlePage?.isLoading ?? false;
export const getArticlesPageError = (state: RootState) => state.articlePage?.error ?? null;
export const getArticlesPageView = (
  state: RootState,
) => state.articlePage?.view ?? getArticlesViewFromStorage();
export const getArticlesPageLimit = (state: RootState) => state.articlePage?.limit ?? 9;
export const getArticlesPageHasMore = (state: RootState) => state.articlePage?.hasMore ?? false;
export const getArticlesPageNum = (state: RootState) => state.articlePage?.page ?? 1;
export const getArticlesPageIsInit = (state: RootState) => state.articlePage?._inited ?? false;
export const getArticlesPageOrder = (
  state: RootState,
) => state.articlePage?.order ?? SortOrder.ASC;
export const getArticlesPageSort = (
  state: RootState,
) => state.articlePage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (
  state: RootState,
) => state.articlePage?.search ?? '';
export const getArticlesPageType = (state: RootState) => state.articlePage?.type ?? ArticleType.ALL;
