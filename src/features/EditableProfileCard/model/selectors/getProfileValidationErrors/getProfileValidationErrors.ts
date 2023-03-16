import { RootState } from '@/app/providers';

export const getProfileValidationErrors = (
  state: RootState,
) => state.profile?.validateProfileError ?? null;
