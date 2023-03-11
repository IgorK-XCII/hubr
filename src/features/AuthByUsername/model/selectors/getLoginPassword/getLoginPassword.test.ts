import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return password data', () => {
    const sliceState = { password: '123' };

    const state: DeepPartial<RootState> = {
      login: sliceState,
    };

    expect(getLoginPassword(state as RootState)).toEqual(sliceState.password);
  });
});
