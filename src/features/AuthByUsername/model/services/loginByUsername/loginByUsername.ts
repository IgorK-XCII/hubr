import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '@/entities';
import { LoginSchema } from '../../types';
import { i18n } from '@/shared/config/i18n';

type LoginByUsernameProps = Pick<LoginSchema, 'password' | 'username'>

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {
  rejectValue: string
}>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const { data } = await axios.post<User>('http://localhost:8000/login', authData);

      thunkApi.dispatch(userActions.setAuthData(data));

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue('login error');
    }
  },
);
