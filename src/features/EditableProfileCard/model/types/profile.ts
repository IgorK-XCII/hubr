import { Profile } from '@/entities';

export enum ValidateProfileError {
  USER_DATA_ERROR = 'USER_DATA_ERROR',
  AGE_ERROR = 'AGE_ERROR',
  NO_DATA_ERROR = 'NO_DATA_ERROR',
}

export interface ProfileSchema {
  data: Profile | null;
  form: Profile | null;
  isLoading: boolean;
  error: string | null;
  isReadonly: boolean;
  validateProfileError?: ValidateProfileError[] | null;
}
