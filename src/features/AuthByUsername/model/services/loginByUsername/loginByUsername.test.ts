import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities';
import { TestAsyncThunk } from '@/shared/config/tests';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  test('success login', async () => {
    const userData = { username: '123', id: '1' };

    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: userData }),
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'user', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.reject(),
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'user', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('login error');
  });
});
