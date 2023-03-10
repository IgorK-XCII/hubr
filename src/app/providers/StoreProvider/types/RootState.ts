import { EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from '../config/store';
import { CounterSchema, UserSchema } from '@/entities';
import { LoginSchema } from '@/features/AuthByUsername';
import { createReducerManager } from '../config/reducerManager';

export type RootState = {
  counter: CounterSchema,
  user: UserSchema,
  login?: LoginSchema,
}

export type RootStateKey = keyof RootState;

export interface StoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReturnType<typeof createReducerManager>
}

export type RootReducer = typeof rootReducer
