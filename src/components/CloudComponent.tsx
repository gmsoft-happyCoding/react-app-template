/* eslint-disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as StyledComponent from 'styled-components';
import * as antd from 'antd';
import * as moment from 'moment';
import * as History from 'history';
import * as ReactRouterDOM from 'react-router-dom';
import * as Redux from 'redux';
import * as ReduxSaga from 'redux-saga';
import * as ReactRouterRedux from 'react-router-redux';
import * as ReactRedux from 'react-redux';
import * as ReduxActions from 'redux-actions';
import * as DvaCore from 'dva-core';
import * as StateContainer from 'state-container';
import * as axios from 'axios';
import * as Reselect from 'reselect';
import * as ReactVirtualized from 'react-virtualized';
import * as reactVirtualizedTree from 'react-virtualized-tree';
import SystemJS from 'systemjs';
import Loadable from 'react-loadable';
import Loading from './Loading';

// 设置被加载组件依赖的公共库
SystemJS.set('react', SystemJS.newModule({ __useDefault: React }));
SystemJS.set('react-dom', SystemJS.newModule({ __useDefault: ReactDOM }));
SystemJS.set('styled-components', SystemJS.newModule({ __useDefault: StyledComponent }));
SystemJS.set('antd', SystemJS.newModule({ __useDefault: antd }));
SystemJS.set('moment', SystemJS.newModule({ __useDefault: moment }));
SystemJS.set('history', SystemJS.newModule({ __useDefault: History }));
SystemJS.set('react-router-dom', SystemJS.newModule({ __useDefault: ReactRouterDOM }));
SystemJS.set('redux', SystemJS.newModule({ __useDefault: Redux }));
SystemJS.set('redux-saga', SystemJS.newModule({ __useDefault: ReduxSaga }));
SystemJS.set('react-router-redux', SystemJS.newModule({ __useDefault: ReactRouterRedux }));
SystemJS.set('react-redux', SystemJS.newModule({ __useDefault: ReactRedux }));
SystemJS.set('redux-actions', SystemJS.newModule({ __useDefault: ReduxActions }));
SystemJS.set('dva-core', SystemJS.newModule({ __useDefault: DvaCore }));
SystemJS.set('state-container', SystemJS.newModule({ __useDefault: StateContainer }));
SystemJS.set('axios', SystemJS.newModule({ __useDefault: axios }));
SystemJS.set('reselect', SystemJS.newModule({ __useDefault: Reselect }));
SystemJS.set('react-virtualized', SystemJS.newModule({ __useDefault: ReactVirtualized }));
SystemJS.set('react-virtualized-tree', SystemJS.newModule({ __useDefault: reactVirtualizedTree }));

const loadComponent = url =>
  Loadable({
    loader: () =>
      SystemJS.import(url)
        .then(({ default: Component }) => Component)
        .catch(error => console.error('loadComponent ERROR:', error)),
    loading() {
      return <Loading tip="加载中..." />;
    },
  });

export default ({ url, ...restProps }) => {
  const Component = loadComponent(url);
  // delete component when unmount
  // React.useEffect(() => () => SystemJS.delete(url), []);
  return <Component {...restProps} />;
};
