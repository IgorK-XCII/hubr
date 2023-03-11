import { loginReducer, loginActions, initialState } from './loginSlice';
import { LoginSchema } from '../types';

describe('loginSlice', () => {
  test('set username', () => {
    const state: Partial<LoginSchema> = { username: 'user-1' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('user')),
    ).toEqual<Partial<LoginSchema>>({
      username: 'user',
    });
  });

  test('set password', () => {
    const state: Partial<LoginSchema> = { password: '0' };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123')),
    ).toEqual<Partial<LoginSchema>>({
      password: '123',
    });
  });

  test('should work with empty state', () => {
    expect(
      loginReducer(undefined, loginActions.setUsername('user')),
    ).toEqual<Partial<LoginSchema>>({
      ...initialState,
      username: 'user',
    });
  });
});
