import { RootState } from '@/app/providers';

export const getProfileIsLoading = (state: RootState) => state.profile?.isLoading || false;
