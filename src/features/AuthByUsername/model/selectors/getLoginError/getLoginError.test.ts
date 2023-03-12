import { RootState } from '@/app/providers';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error data', () => {
    const sliceState = { error: 'error' };

    const state: DeepPartial<RootState> = {
      login: sliceState,
    };

    expect(getLoginError(state as RootState)).toEqual(sliceState.error);
  });
});
