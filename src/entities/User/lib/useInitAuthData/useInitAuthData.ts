import { useEffect } from 'react';
import { userActions } from '@/entities';
import { getAuthDataFromStorage } from '../authDataStorage';
import { useAppDispatch } from '@/shared/lib';

export const useInitAuthData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = getAuthDataFromStorage();

    if (userData) dispatch(userActions.setAuthData(userData));
  }, [dispatch]);
};
