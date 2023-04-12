import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading: boolean;
  error: string | null;
  view: ArticleView;
  page: number;
  hasMore: boolean;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  limit: number;
  type: ArticleType;
  _inited: boolean;
}
