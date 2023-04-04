import { createAsyncThunk } from '@reduxjs/toolkit';
import { validateProfileData } from '../validateProfileData';
import { getProfileForm } from '../../selectors';
import { ThunkOptions } from '@/app/providers';
import { ValidateProfileError } from '../../types';
import { Profile } from '@/entities/Profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  string | number,
  ThunkOptions<ValidateProfileError[] | string>
>('login/updateProfileData', async (profileId, { extra, rejectWithValue, getState }) => {
  const formData = getProfileForm(getState());

  const validateErrors = validateProfileData(formData);

  if (validateErrors.length) {
    return rejectWithValue(validateErrors);
  }

  try {
    const { data } = await extra.api.put<Profile>(`/profile/${profileId}`, formData);

    return data;
  } catch (error) {
    return rejectWithValue('update profile error');
  }
});
