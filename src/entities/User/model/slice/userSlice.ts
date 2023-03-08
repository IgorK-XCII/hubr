import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types';

const initialState: UserSchema = {
  authData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, { payload }: PayloadAction<User>) {
      state.authData = payload;
    },
    logout(state) {
      state.authData = null;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
