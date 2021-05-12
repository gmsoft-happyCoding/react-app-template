/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-08-08 20:50:43
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2019-09-04 16:17:13
 * @Description: Nothing
 */
import { RouteProps } from 'react-router';
import lodash from 'lodash';
import { pathConf } from './routeRegisterCenter';

export interface RouteObj extends RouteProps {
  name: string; // 要显示的  名字
  icon: string; // 图标  antd
  key?: string; // 路由跳转地址   为什么是key 因为antd组件要的键名
  path?: string; // 路由跳转地址   route需要
  display?: boolean; // 是否显示
  showChild?: boolean; // 是否显示子项
  children?: RouteObj[]; // 孩子节点
  exact?: boolean;
  strict?: boolean;
}
/* eslint-disable */

const icons = [
  'apple',
  'github',
  'gitlab',
  'google-plus',
  'code',
  'customer-service',
  'gift',
  'heart',
  'shopping',
  'star',
  'woman',
];

const getIcon = () => {
  const index = lodash.random(0, icons.length - 1);
  return icons[index];
};

// routePath
const menuConf: RouteObj[] = [
  {
    name: '公共模块',
    icon: getIcon(),
    path: pathConf.ROUTE_MODULE_COMMON,
    key: pathConf.ROUTE_MODULE_COMMON,
  },
  {
    name: '私有模块-A',
    icon: getIcon(),
    path: pathConf.ROUTE_MODULE_A,
    key: pathConf.ROUTE_MODULE_A,
  },
];

export default menuConf;
