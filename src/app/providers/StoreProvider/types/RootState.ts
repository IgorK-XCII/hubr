import { EnhancedStore } from '@reduxjs/toolkit';
import { LoginSchema } from '@/features/AuthByUsername';
import { createReducerManager } from '../config/reducerManager';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { UserSchema } from '@/entities/User';
import { ArticleSchema } from '@/entities/Article';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { ScrollPositionSaverSchema } from '@/features/ScrollPositionSaver';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlePageSchema } from '@/pages/ArticlesPage';

export type RootState = {
  user: UserSchema;
  scroll: ScrollPositionSaverSchema;
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  addCommentForm?: AddCommentFormSchema;
  articlePage?: ArticlePageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type RootStateKey = keyof RootState;
export type RootStateLazyReducerKey = ExtractOptionalKeys<RootState>

export interface StoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReturnType<typeof createReducerManager>
}
