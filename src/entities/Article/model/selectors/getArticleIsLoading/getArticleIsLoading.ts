import { RootState } from '@/app/providers';

export const getArticleIsLoading = (state: RootState) => state.article?.isLoading ?? false;
