import { RootState } from '@/app/providers';

export const getProfileData = (state: RootState) => state.profile?.data || null;
