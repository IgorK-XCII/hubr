import { RootState } from '@/app/providers';

export const getArticleData = (state: RootState) => state.article?.data ?? null;
