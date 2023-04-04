import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '@/app/providers';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkOptions<string>
>('login/fetchProfileData', async (profileId, { extra, rejectWithValue }) => {
  try {
    const { data } = await extra.api.get<Profile>(`/profile/${profileId}`);

    return data;
  } catch (error) {
    return rejectWithValue('fetch profile error');
  }
});
