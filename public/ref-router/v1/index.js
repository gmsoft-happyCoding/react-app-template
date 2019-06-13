/* eslint-disable import/no-unresolved */

/**
 * 项目需要被外部引用时
 * 在此定义外部引用路由
 */
import angular from 'angular';
import createFrameRoute from 'createFrameRoute';
import uiRouter from 'ui-router';
import angularBreadcrumb from 'angular-breadcrumb';

const frameRoute = createFrameRoute({
  proxyDomain: process.env.REACT_APP_DOMAIN,
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
