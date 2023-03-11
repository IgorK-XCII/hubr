import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return loading flg', () => {
    const sliceState = { isLoading: true };

    const state: DeepPartial<RootState> = {
      login: sliceState,
    };

    expect(getLoginIsLoading(state as RootState)).toEqual(sliceState.isLoading);
  });
});
