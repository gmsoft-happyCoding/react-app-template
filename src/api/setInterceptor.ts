import { showNetworkError } from '@/utils';
import { axiosTokenInterceptor } from '@gmsoft/auth-sdk';
import { AxiosError, AxiosInstance } from 'axios';
import type { Opts } from './Opts';

export default (instance: AxiosInstance) => {
  instance.interceptors.request.use(axiosTokenInterceptor(
    {
      platDomain:
        process.env.NODE_ENV === 'development'
          ? process.env['business.dev-plat-domain']
          : location.host,
    }
  ));

  const errorHandler = (error: AxiosError & { config: Opts }) => {
    if (!error.config.interceptorIgnoreError) showNetworkError(error);
    return Promise.reject(error);
  };

  instance.interceptors.response.use(undefined, errorHandler);
};
