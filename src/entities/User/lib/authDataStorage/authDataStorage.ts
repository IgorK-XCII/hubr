import { USER_LOCALSTORAGE_KEY } from '@/shared/const';
import { User } from '../../model';

export const setAuthDataToStorage = (user: User) => {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
};

export const getAuthDataFromStorage = (): User | null => {
  const data = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (!data) return null;

  return JSON.parse(data) as User;
};

export const deleteAuthDataFromStorage = () => {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
};
