import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const';

const $api = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (token) config.headers.Authorization = token;
  else delete config.headers.Authorization;

  return config;
});

export { $api };
