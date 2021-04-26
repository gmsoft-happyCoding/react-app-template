import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import CloudComponent, { loadComponent } from '@/components/CloudComponent';
import { useRestore } from 'gm-react-hanger';
import WhatToEat from './components/WhatToEat';
import { Mode } from './enums/Mode';
import { stateContainer } from './utils';

// 通过组件名字 从 registry.gmsoftdev.com 加载
const CloudWhatToEat = loadComponent({ name: 'test-project/WhatToEat' });

const App = () => {
  /**
   * 此hooks可以在页面刷新后恢复子应用(iframe加载)的部分状态:
   * 路由
   * search-page 查询条件
   */
  useRestore(stateContainer._history);

  return (
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
  );
};
export default App;
