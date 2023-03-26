import { EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema, UserSchema, ArticleSchema } from '@/entities';
import { LoginSchema } from '@/features/AuthByUsername';
import { createReducerManager } from '../config/reducerManager';
import { ProfileSchema } from '@/features/EditableProfileCard';

export type RootState = {
  counter: CounterSchema,
  user: UserSchema,
  login?: LoginSchema,
  profile?: ProfileSchema,
  article?: ArticleSchema
}

export type RootStateKey = keyof RootState;
export type RootStateLazyReducerKey = ExtractOptionalKeys<RootState>

export interface StoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReturnType<typeof createReducerManager>
}
