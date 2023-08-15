import api from './api';
import { signOutRequest } from '../store/modules/auth/actions';
import * as dotenv from 'dotenv';

dotenv.config();

const apiInterceptors = (store) => {
  const { dispatch } = store;
  api.interceptors.request.use(
    async (config) => {
      config.transformRequest = (data, headers) => {
        return headers['Content-Type'] === 'application/json'
          ? JSON.stringify(data)
          : data;
      };

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        dispatch(signOutRequest());
        return api(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};
export default apiInterceptors;
