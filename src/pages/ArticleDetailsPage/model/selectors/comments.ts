import { RootState } from '@/app/providers';

export const getArticleCommentsIsLoadingFlg = (
  state: RootState,
) => state.articleDetailsPage?.comments.isLoading || false;

export const getArticleCommentsError = (
  state: RootState,
) => state.articleDetailsPage?.comments.error || null;
