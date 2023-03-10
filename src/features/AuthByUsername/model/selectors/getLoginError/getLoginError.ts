import { RootState } from '@/app/providers';

export const getLoginError = (state: RootState) => state.login?.error || '';
