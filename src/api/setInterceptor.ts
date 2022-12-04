import { showNetworkError } from '@/utils';
import { axiosTokenInterceptor } from '@gmsoft/auth-sdk';
import { AxiosInstance } from 'axios';

export default (instance: AxiosInstance) => {
  instance.interceptors.request.use(axiosTokenInterceptor());

  const errorHandler = error => {
    showNetworkError(error);
    return Promise.reject(error);
  };

  instance.interceptors.response.use(undefined, errorHandler);
};
