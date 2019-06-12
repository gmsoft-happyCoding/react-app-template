/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-amd */
/* eslint-disable no-undef */
/**
 * 项目需要被外部引用时
 * 在此定义外部引用路由
 */
define(['angular', 'frameRoute', 'ui-router', 'angular-breadcrumb'], function(angular, frameRoute) {
  angular
    .module('template-app.router', [require('ui-router'), require('angular-breadcrumb')])
    .config(function($stateProvider) {
      $stateProvider.state(
        'demo',
        frameRoute({
          url: '/demo',
          frameUrl: '/demo',
          proxyDomain: process.env.REACT_APP_DOMAIN,
        })
      );
    });
  return 'template-app.router';
});
