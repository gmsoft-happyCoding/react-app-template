/* eslint-disable */
import { AxiosRequestConfig } from 'axios';
import { Opts, WithPathOpts } from '../Opts.d';
import instance from './instance';
import { convertRESTAPI } from '../util';

/** 刷新访问令牌 */
function tokens_refresh_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/tokens/refresh',
    opts: opts
  });
}

/** 注册令牌 */
function reg_tokens_sms_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/reg-tokens/sms',
    opts: opts
  });
}

/** 令牌信息 */
function token_info_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/token-info',
    opts: opts
  });
}

/** 证书换取访问令牌 */
function tokens_cert_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/tokens/cert',
    opts: opts
  });
}

/** 注册令牌 */
function reg_tokens_pwd_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/reg-tokens/pwd',
    opts: opts
  });
}

/** 注销令牌 */
function token_delete(opts: Opts) {
  return instance({
    method: 'delete',
    url:  '/token',
    opts: opts
  });
}

/** 云平台访问码换取访令牌 */
function tokens_cloud_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/tokens/cloud',
    opts: opts
  });
}

/** 用户名密码换取访令牌 */
function tokens_pwd_post(opts: Opts) {
  return instance({
    method: 'post',
    url:  '/tokens/pwd',
    opts: opts
  });
}

/** 完善令牌 */
function lack_org_tokens_active_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/lack-org-tokens/active',
    opts: opts
  });
}

/** 我的登录信息 */
function me_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/me',
    opts: opts
  });
}

/** 申请用户信息完善令牌 */
function lack_person_tokens_sms_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/lack-person-tokens/sms',
    opts: opts
  });
}

/** 注册令牌 */
function reg_tokens_cert_get(opts: Opts) {
  return instance({
    method: 'get',
    url:  '/reg-tokens/cert',
    opts: opts
  });
}

export {
  tokens_refresh_post,
  reg_tokens_sms_get,
  token_info_get,
  tokens_cert_get,
  reg_tokens_pwd_post,
  token_delete,
  tokens_cloud_post,
  tokens_pwd_post,
  lack_org_tokens_active_get,
  me_get,
  lack_person_tokens_sms_get,
  reg_tokens_cert_get
};
