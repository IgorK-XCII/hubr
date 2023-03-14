import { RootState } from '@/app/providers';

export const getProfileError = (state: RootState) => state.profile?.error || '';
