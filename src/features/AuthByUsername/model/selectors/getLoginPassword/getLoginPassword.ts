import { RootState } from '@/app/providers';

export const getLoginPassword = (state: RootState) => state.login?.password || '';
