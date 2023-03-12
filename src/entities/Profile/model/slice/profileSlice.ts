import { createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services';
import { ProfileSchema } from '../types';

const initialState: ProfileSchema = {
  data: null,
  isLoading: false,
  error: null,
  isReadonly: true,
};

const profileSLice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProfileData.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) state.error = payload;
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSLice;
