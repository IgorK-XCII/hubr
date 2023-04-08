import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { RootState, StoreWithManager, LazyReducersWithAny } from '../types';
import { userReducer } from '@/entities/User';
import { articlesViewMiddleware, authMiddleware } from '../middleware';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api';

export const rootReducer: ReducersMapObject<RootState> = {
  user: userReducer,
};

export const createReduxStore = (
  initialState?: RootState,
  lazyReducers?: LazyReducersWithAny,
) => {
  const reducerManager = createReducerManager({
    ...lazyReducers,
    ...rootReducer,
  });

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }).concat(authMiddleware).concat(articlesViewMiddleware),
  });

  const _store = store as StoreWithManager;
  _store.reducerManager = reducerManager;

  return store;
};
