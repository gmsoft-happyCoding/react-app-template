import React, { createContext } from 'react';
import { OrgType } from '@/types/OrgType.enmu';
import { getValue } from '@gmsoft/tools/lib';
import { flattenDeep } from 'lodash';

// 路由Path集中定义
const pathConf = {
  /** 测试模块定义 */
  ROUTE_MODULE_A: '/module-a',
  ROUTE_MODULE_COMMON: '/module-common',
  /** 404错误页 */
  ROUTE_404: '/404',
};

/** 基础功能定义 */
const routeTable = {
  /** 私有模块A */
  [pathConf.ROUTE_MODULE_A]: React.lazy(() => import('@/app/PrivateA/PrivateA')),
  /** 公共模块样例 */
  [pathConf.ROUTE_MODULE_COMMON]: React.lazy(() => import('@/app/Common/Common')),
};

/** 业务角色功能表 */
const businessRoleRouteTable = {
  // 公共模块
  common: [pathConf.ROUTE_MODULE_COMMON],
};
/** 账号角色功能表 */
const accountRoleRouteTable = {
  // // 平台
  [OrgType.PLATFORM]: [businessRoleRouteTable.common, pathConf.ROUTE_MODULE_A],
  // 采购人
  [OrgType.STOCK]: [businessRoleRouteTable.common],
  // 财政
  [OrgType.APPROVE]: [businessRoleRouteTable.common, pathConf.ROUTE_MODULE_A],
};

type RouteTable =
  | { [roleName: string]: string[] }
  | { [roleName: number]: Array<string | string[]> };

/**
 * 获取指定身份的路由配置path
 * @param roleType 角色身份
 * @param routeTables 账号角色功能表
 * @param routeConf 功能配置表
 */
function getRouteConf(roleType: number, accountTables: RouteTable, routeConf) {
  // 根据角色获取对应的路由功能定义
  const roleConf = getValue(accountTables, +roleType, []);
  // 将功能定义展开成一维路由path数组，转换成路由配置形式返回
  return flattenDeep<string>(roleConf).map(path => ({
    path,
    component: getValue(routeConf, path),
  }));
}

const defVal = {
  routeTable,
  businessRoleRouteTable,
  accountRoleRouteTable,
};
const RouteContext = createContext(defVal);

export { defVal, pathConf, getRouteConf, RouteContext };
