/* eslint-disable */
import { AxiosRequestConfig } from 'axios';
import { Opts, WithPathOpts } from '../Opts.d';
import instance from './instance';
import { convertRESTAPI } from '../util';

/** 今天吃什么的图片 */
function img_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/img',
    opts: opts
  });
}

/** 今天吃什么? */
function what_to_eat_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/what-to-eat',
    opts: opts
  });
}

export {
  img_get,
  what_to_eat_get
};
