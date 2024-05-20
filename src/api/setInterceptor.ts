import axios, { AxiosError, AxiosInstance } from 'axios';
import { axiosTokenInterceptor } from '@gmsoft/auth-sdk';
import { showNetworkError } from '@/utils';
import type { Opts } from './Opts';

export default (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    axiosTokenInterceptor({
      platDomain:
        process.env.NODE_ENV === 'development'
          ? process.env['business.dev-plat-domain']
          : location.host,
    })
  );

  const errorHandler = (error: AxiosError & { config: Opts }) => {
    /**
     * 忽略或主动取消请求时不显示错误信息
     */
    if (!error?.config?.interceptorIgnoreError && !axios.isCancel(error)) {
      showNetworkError(error);
    }

    return Promise.reject(error);
  };

  instance.interceptors.response.use(undefined, errorHandler);
};
