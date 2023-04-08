import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/Article';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading: boolean;
  error: string | null;
  view: ArticleView;
}
