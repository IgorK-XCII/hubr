import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '@/entities';
import { ThunkOptions } from '@/app/providers';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkOptions<string>
>('login/fetchProfileData', async (_, { extra, rejectWithValue }) => {
  try {
    const { data } = await extra.api.get<Profile>('/profile');

    return data;
  } catch (error) {
    return rejectWithValue('fetch profile error');
  }
});
