import { useResponseInterceptor } from './util';
import { showNetworkError, stateContainer } from '@/utils';
import { axiosSSOInterceptor } from '@gmsoft/auth-sdk';

useResponseInterceptor(
  undefined,
  axiosSSOInterceptor({
    djcGatewayBaseUrl: process.env.REACT_APP_DJC_GATEWAY_BASE,
    dispatch: stateContainer._store.dispatch,
  })
);

const errorHandler = error => {
  showNetworkError(error);
  return Promise.reject(error);
};

useResponseInterceptor(undefined, errorHandler);
