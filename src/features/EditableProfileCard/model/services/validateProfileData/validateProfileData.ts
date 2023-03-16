import { Profile } from '@/entities';
import { ValidateProfileError } from '../../types';

export const validateProfileData = (profile: Profile | null) => {
  if (!profile) return [ValidateProfileError.NO_DATA_ERROR];

  const { firstname, lastname, age } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.USER_DATA_ERROR);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.AGE_ERROR);
  }

  return errors;
};
