import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import WhatToEat from './components/WhatToEat';
import { Mode } from './enums/Mode';
import { stateContainer } from './utils';
import CloudComponent, { loadComponent } from '@/components/CloudComponent';

// 通过组件名字 从 registry.gmsoftdev.com 加载
const CloudWhatToEat = loadComponent({ name: 'test-project/WhatToEat' });

const App = () => (
  <Provider store={stateContainer._store}>
    <Router history={stateContainer._history}>
      <>
        <WhatToEat defaultMode={Mode.DRAW} />
        {/* <CloudWhatToEat /> */}
        {/* 通过组件名字 从 registry.gmsoftdev.com 加载 */}
        {/* <CloudComponent name="test-project/WhatToEat" defaultMode="search" /> */}
      </>
    </Router>
  </Provider>
);

export default hot(App);
