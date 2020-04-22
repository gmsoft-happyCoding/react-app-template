import { useResponseInterceptor } from './util';
import { showNetworkError } from '@/utils';

const errorHandler = error => {
  showNetworkError(error);
};

useResponseInterceptor(undefined, errorHandler);
