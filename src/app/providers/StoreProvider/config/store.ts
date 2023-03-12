import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { RootState, StoreWithManager, LazyReducersWithAny } from '../types';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { authMiddleware } from '../middleware';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api';

export const rootReducer: ReducersMapObject<RootState> = {
  counter: counterReducer,
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
    reducer: reducerManager.reduce as unknown as ReducersMapObject<RootState>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }).concat(authMiddleware),
  });

  const _store = store as StoreWithManager;
  _store.reducerManager = reducerManager;

  return store;
};
