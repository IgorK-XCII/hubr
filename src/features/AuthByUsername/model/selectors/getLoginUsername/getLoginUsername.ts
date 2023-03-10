import { RootState } from '@/app/providers';

export const getLoginUsername = (state: RootState) => state.login?.username || '';
