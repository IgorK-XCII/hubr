import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities';
import { fetchProfileData } from '../services';
import { ProfileSchema } from '../types';

const initialState: ProfileSchema = {
  data: null,
  form: null,
  isLoading: false,
  error: null,
  isReadonly: true,
};

const profileSLice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly(state, { payload }: PayloadAction<boolean>) {
      state.isReadonly = payload;
    },
    updateProfileForm(state, { payload }: PayloadAction<Partial<Profile>>) {
      state.form = {
        ...state.form,
        ...payload,
      } as Profile;
    },
    cancelEditProfileForm(state) {
      state.form = state.data;
      state.isReadonly = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.form = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProfileData.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) state.error = payload;
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSLice;
