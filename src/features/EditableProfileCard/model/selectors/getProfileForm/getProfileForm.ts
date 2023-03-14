import { RootState } from '@/app/providers';

export const getProfileForm = (state: RootState) => state.profile?.form || null;
