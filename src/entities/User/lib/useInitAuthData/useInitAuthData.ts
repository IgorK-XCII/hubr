import { useEffect } from 'react';
import { userActions } from '@/entities';
import { useAppDispatch } from '@/app/providers';
import { getAuthDataFromStorage } from '../authDataStorage';

export const useInitAuthData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = getAuthDataFromStorage();

    if (userData) dispatch(userActions.setAuthData(userData));
  }, [dispatch]);
};
