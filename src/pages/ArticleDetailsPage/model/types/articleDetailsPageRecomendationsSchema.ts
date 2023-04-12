import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article> {
  isLoadign: boolean;
  error: string | null;
}
