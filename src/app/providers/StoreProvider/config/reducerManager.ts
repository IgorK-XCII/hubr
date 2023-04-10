import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { RootState, RootStateKey } from '../types';

export function createReducerManager(initialReducers: ReducersMapObject<RootState>) {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: RootStateKey[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: RootState | undefined, action: AnyAction) => {
      if (keysToRemove.length && state) {
        state = { ...state };

        keysToRemove.forEach((key) => delete state?.[key]);
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add: (key: RootStateKey, reducer: Reducer | undefined) => {
      if (!key || !reducer || reducers[key]) return;

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key: RootStateKey) => {
      if (!key || !reducers[key]) return;

      delete reducers[key];
      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
    isReducerMounted: (key: RootStateKey) => Boolean(reducers[key]),
  };
}
