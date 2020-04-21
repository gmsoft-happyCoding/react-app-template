/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { defaultsDeep } from 'lodash';
import { WithPathOpts } from './Opts.d';
import qs from 'qs';

const instance = axios.create({
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  paramsSerializer: function(params) {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  },
});

type Conf = AxiosRequestConfig & { opts?: Partial<WithPathOpts> };

function createAPI(baseURL?: string) {
  return function(conf: Conf) {
    conf = conf || {};
    return instance(
      Object.assign(
        {},
        {
          url: conf.url,
          baseURL: baseURL,
          method: conf.method,
        },
        conf.opts
      )
    );
  };
}

function convertRESTAPI(url: string, opts: WithPathOpts): string {
  if (!opts || !opts.path) return url;

  const pathKeys = Object.keys(opts.path);

  pathKeys.forEach(key => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g');
    url = url.replace(r, opts.path[key]);
  });

  return url;
}

interface InterceptorHandler<V> {
  (value: V): V | Promise<V>;
}

interface InterceptorErrorHandler {
  (error: any): any;
}

function useRequestInterceptor(
  beforeRequestHandler?: InterceptorHandler<AxiosRequestConfig>,
  errorHandler?: InterceptorErrorHandler
): number {
  return instance.interceptors.request.use(beforeRequestHandler, errorHandler);
}

function useResponseInterceptor(
  successHandler?: InterceptorHandler<AxiosResponse>,
  errorHandler?: InterceptorErrorHandler
): number {
  return instance.interceptors.response.use(successHandler, errorHandler);
}

function ejectRequestInterceptor(interceptorId: number) {
  instance.interceptors.request.eject(interceptorId);
}

function ejectResponseInterceptor(interceptorId: number) {
  instance.interceptors.response.eject(interceptorId);
}

function mergeDefaults(...defaults: AxiosRequestConfig[]) {
  return (instance.defaults = defaultsDeep(instance.defaults, ...defaults));
}

export {
  createAPI,
  convertRESTAPI,
  useRequestInterceptor,
  useResponseInterceptor,
  ejectRequestInterceptor,
  ejectResponseInterceptor,
  mergeDefaults,
};
