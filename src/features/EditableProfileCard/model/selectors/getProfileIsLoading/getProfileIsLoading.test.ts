import { RootState } from '@/app/providers';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should work with filled state', () => {
    const isLoading = true;

    const state: DeepPartial<RootState> = {
      profile: {
        isLoading,
      },
    };

    expect(getProfileIsLoading(state as RootState)).toBe(isLoading);
  });

  test('should work with empty state', () => {
    expect(getProfileIsLoading({} as RootState)).toEqual(false);
  });
});
