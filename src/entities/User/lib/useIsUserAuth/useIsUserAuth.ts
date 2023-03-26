import { useAppSelector } from '@/shared/lib';
import { getUserAuthData } from '../../model';

export const useIsUserAuth = () => useAppSelector(getUserAuthData);
