import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities';
import { TestAsyncThunk } from '@/shared/config/tests';

describe('loginByUsername', () => {
  test('success login', async () => {
    const userData = { username: '123', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(
      Promise.resolve({ data: userData }),
    );

    const result = await thunk.callThunk({ username: 'user', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(
      Promise.reject(),
    );

    const result = await thunk.callThunk({ username: 'user', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('login error');
  });
});
