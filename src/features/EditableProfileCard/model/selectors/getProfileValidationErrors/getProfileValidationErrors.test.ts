import { RootState } from '@/app/providers';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { ValidateProfileError } from '../../types';

describe('getProfileValidationErrors', () => {
  test('should work with filled state', () => {
    const validateProfileError = [
      ValidateProfileError.AGE_ERROR,
      ValidateProfileError.USER_DATA_ERROR,
    ];

    const state: DeepPartial<RootState> = {
      profile: {
        validateProfileError,
      },
    };

    expect(getProfileValidationErrors(state as RootState)).toEqual(validateProfileError);
  });

  test('should work with empty state', () => {
    expect(getProfileValidationErrors({} as RootState)).toBe(null);
  });
});
