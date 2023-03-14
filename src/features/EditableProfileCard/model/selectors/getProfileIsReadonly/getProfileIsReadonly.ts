import { RootState } from '@/app/providers';

export const getProfileIsReadonly = (state: RootState) => state.profile?.isReadonly ?? true;
