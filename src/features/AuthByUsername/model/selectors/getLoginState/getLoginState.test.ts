import { RootState } from '@/app/providers';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login state', () => {
    const sliceState = { password: '123', isLoading: true, username: 'user' };

    const state: DeepPartial<RootState> = {
      login: sliceState,
    };

    expect(getLoginState(state as RootState)).toEqual(sliceState);
  });
});
