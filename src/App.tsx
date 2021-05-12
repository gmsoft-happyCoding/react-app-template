import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { useRestore } from 'gm-react-hanger';
import Home from '@/app/Home/Home';
import { stateContainer } from './utils';

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
        <Route component={Home} path="/" />
      </Router>
    </Provider>
  );
};
export default App;
