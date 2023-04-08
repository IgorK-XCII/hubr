import { EnhancedStore } from '@reduxjs/toolkit';
import { LoginSchema } from '@/features/AuthByUsername';
import { createReducerManager } from '../config/reducerManager';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { UserSchema } from '@/entities/User';
import { ArticleSchema } from '@/entities/Article';
import { ArticleCommentsSchema, ArticlePageSchema } from '@/pages';
import { AddCommentFormSchema } from '@/features/AddCommentForm';

export type RootState = {
  user: UserSchema;
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  articleComments?: ArticleCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlePage?: ArticlePageSchema;
}

export type RootStateKey = keyof RootState;
export type RootStateLazyReducerKey = ExtractOptionalKeys<RootState>

export interface StoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReturnType<typeof createReducerManager>
}
