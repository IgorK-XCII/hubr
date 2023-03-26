import { RootState } from '@/app/providers';

export const getArticleError = (state: RootState) => state.article?.error ?? null;
