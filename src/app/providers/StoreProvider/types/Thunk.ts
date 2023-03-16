import { AxiosInstance } from 'axios';
import { RootState } from './RootState';

interface ThunkExtra {
  api: AxiosInstance;
}

export interface ThunkOptions<T> {
  rejectValue: T;
  extra: ThunkExtra;
  state: RootState;
}
