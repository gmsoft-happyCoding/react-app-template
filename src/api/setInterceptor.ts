import { useResponseInterceptor } from './util';
import { showNetworkError } from '@/utils';

const errorHandler = error => {
  showNetworkError(error);
  return Promise.reject(error);
};

useResponseInterceptor(undefined, errorHandler);
