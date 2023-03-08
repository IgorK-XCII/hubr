import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/AuthByUsername';
import { RootState } from '../types/RootState';
import { authMiddleware } from '../middleware';

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  login: loginReducer,
});

export const createReduxStore = (initialState: RootState) => configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
});
