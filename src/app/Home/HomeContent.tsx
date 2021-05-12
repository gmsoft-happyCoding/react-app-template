import React, { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PUBLIC_METHODS } from '@/constant/namespace';
import { publicMethodsState } from '@/models/publicMethods/index.d';
import LoadingBlock from '@/components/LoadingBlock';
import NotFound from '@/app/404/404';
import { RouteContext, getRouteConf, defVal, pathConf } from './routeRegisterCenter';
import { Layout } from './style';

function HomeContent() {
  // 通过Context获取路由相关配置
  const { routeTable, accountRoleRouteTable } = useContext(RouteContext);
  // 取得用户信息
  const { userInfo } = useSelector((state: publicMethodsState) => state[PUBLIC_METHODS]);

  // 计算实际存在的路由配置集合并缓存下来
  const renderConf = useMemo(
    () => getRouteConf(userInfo.orgType!, accountRoleRouteTable, routeTable),
    [userInfo, accountRoleRouteTable, routeTable]
  );

  // 根据实际路由结果，按需渲染需要的路由
  return (
    <RouteContext.Provider value={defVal}>
      <Layout>
        <React.Suspense fallback={<LoadingBlock />}>
          <Switch>
            {renderConf.map(item => (
              <Route key={item.path} path={item.path} component={item.component} />
            ))}
            <Route key={pathConf.ROUTE_404} path={pathConf.ROUTE_404} component={NotFound} />
            <Redirect to={pathConf.ROUTE_404} />
          </Switch>
        </React.Suspense>
      </Layout>
    </RouteContext.Provider>
  );
}

export default HomeContent;
