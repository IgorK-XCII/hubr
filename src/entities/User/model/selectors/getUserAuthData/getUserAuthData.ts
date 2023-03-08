import { RootState } from '@/app/providers';

export const getUserAuthData = (state: RootState) => state.user.authData;
