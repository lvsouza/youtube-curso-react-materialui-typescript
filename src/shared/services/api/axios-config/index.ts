import axios from 'axios';

import { responseInterceptor, errorInterceptor } from './interceptors';
import { Environment } from '../../../environment';


export const Api = () => {
  const api = axios.create({
    baseURL: Environment.URL_BASE,
    headers: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem('APP_ACCESS_TOKEN') || '""')}`
    }
  });

  api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
  );

  return api;
};
