import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { LoginSchema } from '../../types';
import { ThunkOptions } from '@/app/providers';

type LoginByUsernameProps = Pick<LoginSchema, 'password' | 'username'>

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkOptions<string>>(
  'login/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.post<User>('/login', authData);

      dispatch(userActions.setAuthData(data));

      return data;
    } catch (error) {
      return rejectWithValue('login error');
    }
  },
);
