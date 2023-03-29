import { RootState } from '@/app/providers';

export const getArticleCommentsIsLoadingFlg = (
  state: RootState,
) => state.articleComments?.isLoading || false;

export const getArticleCommentsError = (
  state: RootState,
) => state.articleComments?.error || null;
