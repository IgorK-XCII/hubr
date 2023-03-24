import { createAsyncThunk } from '@reduxjs/toolkit';
import { validateProfileData } from '../validateProfileData';
import { getProfileForm } from '../../selectors';
import { Profile } from '@/entities';
import { ThunkOptions } from '@/app/providers';
import { ValidateProfileError } from '../../types';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkOptions<ValidateProfileError[] | string>
>('login/updateProfileData', async (_, { extra, rejectWithValue, getState }) => {
  const formData = getProfileForm(getState());

  const validateErrors = validateProfileData(formData);

  if (validateErrors.length) {
    return rejectWithValue(validateErrors);
  }

  try {
    const { data } = await extra.api.put<Profile>('/profile', formData);

    return data;
  } catch (error) {
    return rejectWithValue('update profile error');
  }
});
