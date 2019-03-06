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
import { componentRegistry } from '@/api';
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

interface RegistryInfo {
  /**
   * 组件名字
   * format project/component
   */
  name?: string;
  /**
   * 组件加载的url
   */
  url?: string;
}

interface AnyProps {
  [key: string]: any;
}

const { lazy, useMemo, Suspense } = React;
const { compose } = Redux;
const {
  Icon,
  Typography: { Paragraph },
} = antd;

// 创建加载失败显示的组件
const createError = (errorMessage: string) => ({
  default: () => (
    <div style={{ textAlign: 'center' }}>
      <Icon type="frown" theme="twoTone" style={{ fontSize: 30, marginBottom: 15 }} />
      <Paragraph
        type="warning"
        ellipsis={{ rows: 3, expandable: true }}
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        {errorMessage}
      </Paragraph>
    </div>
  ),
});

// 创建组件加载器
const createLoader = ({ name, url }: RegistryInfo) => async () => {
  if (!url && !name) {
    const error = '请传递有效的参数 url or name';
    // eslint-disable-next-line no-console
    console.error('loadComponent Error =>', error);
    return createError(error);
  }

  try {
    if (!url && name) {
      const [projectName, componentName] = name.split('/');
      const {
        data,
      } = await componentRegistry.api_projects_projectName_components_componentName_url_get({
        path: {
          projectName,
          componentName,
        },
      });
      // eslint-disable-next-line prefer-destructuring
      url = data.url;
    }

    return await SystemJS.import(url);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('loadComponent Error =>', error);
    return createError(error.message);
  }
};

const wrapSuspense = Component => props => (
  <Suspense fallback={<Loading tip="加载中..." />}>
    <Component {...props} />
  </Suspense>
);

/**
 * 通过 url or name 加载组件
 * name = project/component
 * 优先级: url > name
 */
export const loadComponent = ({ name, url }: RegistryInfo) =>
  compose(
    wrapSuspense,
    lazy,
    createLoader
  )({ name, url });

export default (props: RegistryInfo & AnyProps) => {
  const { name, url } = props;
  const Component = useMemo(() => loadComponent({ name, url }), [name, url]);
  // delete component when unmount
  // React.useEffect(() => () => SystemJS.delete(url), []);
  return <Component {...props} />;
};
