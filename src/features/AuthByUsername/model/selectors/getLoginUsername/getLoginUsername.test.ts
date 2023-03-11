import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username data', () => {
    const sliceState = { username: 'user' };

    const state: DeepPartial<RootState> = {
      login: sliceState,
    };

    expect(getLoginUsername(state as RootState)).toEqual(sliceState.username);
  });
});
