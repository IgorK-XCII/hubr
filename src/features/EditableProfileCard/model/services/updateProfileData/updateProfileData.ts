import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileForm } from '../../selectors';
import { Profile } from '@/entities';
import { ThunkOptions } from '@/app/providers';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkOptions<string>
>('login/updateProfileData', async (_, { extra, rejectWithValue, getState }) => {
  try {
    const formData = getProfileForm(getState());

    const { data } = await extra.api.put<Profile>('/profile', formData);

    return data;
  } catch (error) {
    return rejectWithValue('update profile error');
  }
});
