import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services';
import { LoginSchema } from '../types';

export const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, { payload }: PayloadAction<LoginSchema['username']>) {
      state.username = payload;
    },
    setPassword(state, { payload }: PayloadAction<LoginSchema['password']>) {
      state.password = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) state.error = payload;
    });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
