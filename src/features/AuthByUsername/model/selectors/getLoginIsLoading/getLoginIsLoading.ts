import { RootState } from '@/app/providers';

export const getLoginIsLoading = (state: RootState) => state.login?.isLoading || false;
