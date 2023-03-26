import { useEffect, useState } from 'react';
import { userActions } from '@/entities';
import { getAuthDataFromStorage } from '../authDataStorage';
import { useAppDispatch } from '@/shared/lib';

export const useInitAuthData = () => {
  const [userInited, setUserInited] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = getAuthDataFromStorage();

    if (userData) dispatch(userActions.setAuthData(userData));

    setUserInited(true);
  }, [dispatch]);

  return { userInited };
};
