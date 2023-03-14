import { EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema, UserSchema } from '@/entities';
import { LoginSchema } from '@/features/AuthByUsername';
import { createReducerManager } from '../config/reducerManager';
import { ProfileSchema } from '@/features/EditableProfileCard';

export type RootState = {
  counter: CounterSchema,
  user: UserSchema,
  login?: LoginSchema,
  profile?: ProfileSchema
}

export type RootStateKey = keyof RootState;
export type RootStateLazyReducerKey = ExtractOptionalKeys<RootState>

export interface StoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReturnType<typeof createReducerManager>
}
