import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { RootState } from '../types/RootState';

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export const createReduxStore = (initialState: RootState) => configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  preloadedState: initialState,
});
