import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { RootState, StoreWithManager } from '../types/RootState';
import { authMiddleware } from '../middleware';
import { createReducerManager } from './reducerManager';

export const rootReducer: ReducersMapObject<RootState> = {
  counter: counterReducer,
  user: userReducer,
};

export const createReduxStore = (initialState: RootState) => {
  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
  });

  const _store = store as StoreWithManager;
  _store.reducerManager = reducerManager;

  return store;
};
