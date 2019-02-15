import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import WhatToEat from './components/WhatToEat';
import { Mode } from './enums/Mode';
import { stateContainer } from './utils';

const App = () => (
  <LocaleProvider locale={zhCN}>
    <Provider store={stateContainer._store}>
      <Router history={stateContainer._history}>
        <WhatToEat defaultMode={Mode.DRAW} />
      </Router>
    </Provider>
  </LocaleProvider>
);

// @ts-ignore
setConfig({ pureSFC: true });
export default hot(module)(App);
