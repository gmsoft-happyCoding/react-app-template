/* eslint-disable import/no-unresolved */

/**
 * 项目需要被外部引用时
 * 在此定义外部引用路由
 */
import angular from 'angular';
import createFrameRoute from 'createFrameRoute';
import uiRouter from 'ui-router';
import angularBreadcrumb from 'angular-breadcrumb';

const domainRegx = /(http(s)?:)?\/\/(?:[a-z0-9](?:[a-z0-9-_]{0,61}[a-z0-9])?(\.|:))+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;

const frameRoute = createFrameRoute({
  proxyDomain: domainRegx.exec(process.env.REACT_APP_PUBLIC_URL)[0],
});

const moduleId = 'template-app.router';

angular.module(moduleId, [uiRouter, angularBreadcrumb]).config($stateProvider => {
  $stateProvider.state(
    'demo',
    frameRoute({
      url: '/demo',
      frameUrl: '/demo',
    })
  );
});

export default moduleId;
