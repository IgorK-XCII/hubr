import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { fetchProfileData, updateProfileData } from '../services';
import { ProfileSchema } from '../types';

export const initialState: ProfileSchema = {
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
    updateProfileForm(state, { payload }: PayloadAction<Profile>) {
      state.form = {
        ...state.form,
        ...payload,
      };
    },
    cancelEditProfileForm(state) {
      state.form = state.data;
      state.isReadonly = true;
      state.validateProfileError = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.form = payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) state.error = payload;
      }).addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.validateProfileError = null;
      })
      .addCase(updateProfileData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.form = payload;
        state.isReadonly = true;
        state.isLoading = false;
      })
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;

        if (payload) {
          if (Array.isArray(payload)) {
            state.validateProfileError = payload;
          } else {
            state.error = payload;
          }
        }
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSLice;
