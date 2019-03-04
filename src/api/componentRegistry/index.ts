/* eslint-disable */
import { AxiosRequestConfig } from 'axios';
import { Opts, WithPathOpts } from '../Opts.d';
import instance from './instance';
import { convertRESTAPI } from '../util';

/** 获取项目的组件列表  */
function api_projects_projectName_components_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/projects/{projectName}/components', opts),
    opts: opts
  });
}

/** 获取组件元信息  */
function api_projects_projectName_components_componentName_meta_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/projects/{projectName}/components/{componentName}/meta', opts),
    opts: opts
  });
}

/** 获取当前发布的项目列表  */
function api_projects_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/api/projects',
    opts: opts
  });
}

/** 获取组件的加载地址  */
function api_projects_projectName_components_componentName_url_get(opts: WithPathOpts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/projects/{projectName}/components/{componentName}/url', opts),
    opts: opts
  });
}

export {
  api_projects_projectName_components_get,
  api_projects_projectName_components_componentName_meta_get,
  api_projects_get,
  api_projects_projectName_components_componentName_url_get
};
