import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { useRestore } from 'gm-react-hanger';
import { Themeable } from '@gmsoft/tt-sdk';
import WhatToEat from './components/WhatToEat';
import { Mode } from './enums/Mode';
import { stateContainer } from './utils';
import CloudComponent, { loadComponent } from '@/components/CloudComponent';

// 通过组件名字 从 registry.xcjdev1.gm 加载
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
      <Themeable djcGatewayBaseUrl={process.env['gateway.djc']} colorScheme="light">
        <Router history={stateContainer._history}>
          <>
            <WhatToEat defaultMode={Mode.DRAW} />
            <CloudWhatToEat />
            {/* 通过组件名字 从 registry.xcjdev1.gm 加载 */}
            <CloudComponent name="test-project/WhatToEat" defaultMode="search" />
          </>
        </Router>
      </Themeable>
    </Provider>
  );
};
export default App;
