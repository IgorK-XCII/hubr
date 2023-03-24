import { RootState } from '@/app/providers';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should work with filled state', () => {
    const error = 'error';

    const state: DeepPartial<RootState> = {
      profile: {
        error,
      },
    };

    expect(getProfileError(state as RootState)).toBe(error);
  });

  test('should work with empty state', () => {
    expect(getProfileError({} as RootState)).toBe('');
  });
});
