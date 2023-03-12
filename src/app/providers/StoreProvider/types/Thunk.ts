import { AxiosInstance } from 'axios';

interface ThunkExtra {
  api: AxiosInstance;
}

export interface ThunkOptions<T> {
  rejectValue: T;
  extra: ThunkExtra;
}
