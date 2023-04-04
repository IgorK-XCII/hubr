import { AnyAction, isAnyOf, isFulfilled } from '@reduxjs/toolkit';
import { loginByUsername } from '@/features/AuthByUsername';
import { deleteAuthDataFromStorage, setAuthDataToStorage, userActions } from '@/entities/User';

const isLoggedIn = isFulfilled(loginByUsername);
const isLoggedOut = isAnyOf(userActions.logout);

export const authMiddleware = () => (
  next: (action: AnyAction) => void,
) => (action: AnyAction): void => {
  console.log(action);
  if (isLoggedIn(action)) setAuthDataToStorage(action.payload);

  if (isLoggedOut(action)) deleteAuthDataFromStorage();

  next(action);
};
