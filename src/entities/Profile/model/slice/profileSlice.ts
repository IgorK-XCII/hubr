import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types';

const initialState: ProfileSchema = {
  data: null,
  isLoading: false,
  error: null,
  readonly: false,
};

const profileSLice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } = profileSLice;
