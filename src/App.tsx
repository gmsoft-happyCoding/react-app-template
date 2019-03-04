import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import WhatToEat from './components/WhatToEat';
import { Mode } from './enums/Mode';
import { stateContainer } from './utils';
import CloudComponent, { loadComponent } from '@/components/CloudComponent';

// 通过组件名字 从 registry.gmsoftdev.com 加载
const CloudWhatToEat = loadComponent({ name: 'test-project/WhatToEat' });

const App = () => (
  <LocaleProvider locale={zhCN}>
    <Provider store={stateContainer._store}>
      <Router history={stateContainer._history}>
        <>
          <WhatToEat defaultMode={Mode.DRAW} />
          <CloudWhatToEat />
          {/* 通过组件名字 从 registry.gmsoftdev.com 加载 */}
          <CloudComponent name="test-project/WhatToEat" defaultMode="search" />
        </>
      </Router>
    </Provider>
  </LocaleProvider>
);

// @ts-ignore
setConfig({ pureSFC: true });
export default hot(module)(App);
