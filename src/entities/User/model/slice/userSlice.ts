import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types';

const initialState: UserSchema = {

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
