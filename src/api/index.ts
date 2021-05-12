import { cloneDeep, get } from 'lodash';
import history from '@/utils/history';
import { useRequestInterceptor, useResponseInterceptor } from './util';

import * as login from './login';
import * as newOrg from './newOrg';

// 添加请求拦截器
useRequestInterceptor(
  config => {
    const cloneConfig = cloneDeep(config);
    const newConfig = {
      ...cloneConfig,
      headers: {
        ...cloneConfig.headers,
      },
    };
    if (process.env.NODE_ENV === 'development') {
      // if 开发环境
      const proxyRegex = /(\/yw-gateway|\/djc-gateway|\/djc-glxtdatagateway|\/location|\/gwebsite|\/stockapplys)/;
      const matchs = (newConfig.baseURL || '').match(proxyRegex);

      if (matchs) {
        newConfig.baseURL = matchs[0];
      } else {
        newConfig.baseURL = '';
      }
    }

    return newConfig;
  },
  error =>
    // console.error('>>request error<<', error);
    Promise.reject(error)
);

// 添加响应拦截器
useResponseInterceptor(
  response =>
    // console.log('拦截器,response', response);
    response,
  error => {
    try {
      if (error.response) {
        // 响应状态码
        error.statusCode = error.response.status;
        // 业务状态码
        error.businessCode = get(error, 'response.data.res', null);
        switch (error.response.status) {
          case 200:
            error.message = error.response.data.msg || error.response.data.message || undefined;
            break;
          case 400:
            error.message = error.response.data.msg || error.response.data.message || undefined;
            break;
          case 401:
            error.message = '您的登录信息已失效！';
            // history.push('/error/401');
            break;
          case 403:
            error.message = '您没有权限进行该操作！';
            history.push('/error/403');
            break;
          case 404:
            error.message = '未找到相关服务！';
            // history.push('/error/404');
            break;
          case 405:
            error.message = '请求被拦截！';
            break;
          case 414:
            error.message = '请求地址过长！';
            break;
          case 500:
            error.message =
              error.response.data.msg || error.response.data.message || '服务器内部错误！';
            // history.push('/error/500');
            break;
          case 502:
            error.message = `服务器内部错误，${error.response.statusText}`;
            // history.push('/error/500');
            break;
          default:
            error.message = error.response.data.msg || error.response.data.message || undefined;
        }
        return Promise.reject(error);
      }
      error.statusCode = 0;
      return Promise.reject(error);
    } catch (e) {
      error.statusCode = 0;
      error.message = `服务器异常,${e}`;
      return Promise.reject(error);
    }
  }
);

export { login, newOrg };
