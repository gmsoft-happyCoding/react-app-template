module.exports = () => ({
  react: {
    root: 'React',
    amd: 'react',
    commonjs: 'react',
    commonjs2: 'react',
    cdn: {
      development: `${process.env['business.cdn']}/react/17.0.1/react.development.js`,
      production: `${process.env['business.cdn']}/react/17.0.1/react.production.min.js`,
    },
  },
  'react-is': {
    root: 'ReactIs',
    amd: 'react-is',
    commonjs: 'react-is',
    commonjs2: 'react-is',
    cdn: {
      development: `${process.env['business.cdn']}/react-is/17.0.1/react-is.development.js`,
      production: `${process.env['business.cdn']}/react-is/17.0.1/react-is.production.min.js`,
    },
  },
  'react-dom': {
    root: 'ReactDOM',
    amd: 'react-dom',
    commonjs: 'react-dom',
    commonjs2: 'react-dom',
    cdn: {
      development: `${process.env['business.cdn']}/react-dom/17.0.1/react-dom.development.js`,
      production: `${process.env['business.cdn']}/react-dom/17.0.1/react-dom.production.min.js`,
    },
  },
  'styled-components': {
    root: 'styled',
    amd: 'styled-components',
    commonjs: 'styled-components',
    commonjs2: 'styled-components',
    cdn: {
      development: `${process.env['business.cdn']}/styled-components/5.2.1/styled-components.js`,
      production: `${process.env['business.cdn']}/styled-components/5.2.1/styled-components.min.js`,
    },
  },
  antd: {
    root: 'antd',
    amd: 'antd',
    commonjs: 'antd',
    commonjs2: 'antd',
    cdn: {
      development: `${process.env['business.cdn']}/antd/3.26.20-custom.4/antd.js`,
      production: `${process.env['business.cdn']}/antd/3.26.20-custom.4/antd.min.js`,
    },
  },
  moment: {
    root: 'moment',
    amd: 'moment',
    commonjs: 'moment',
    commonjs2: 'moment',
    cdn: {
      development: `${process.env['business.cdn']}/moment/2.29.4/moment.js`,
      production: `${process.env['business.cdn']}/moment/2.29.4/moment.min.js`,
    },
  },
  history: {
    root: 'History',
    amd: 'history',
    commonjs: 'history',
    commonjs2: 'history',
    cdn: {
      development: `${process.env['business.cdn']}/history/4.7.2/history.js`,
      production: `${process.env['business.cdn']}/history/4.7.2/history.min.js`,
    },
  },
  'react-router-dom': {
    root: 'ReactRouterDOM',
    amd: 'react-router-dom',
    commonjs: 'react-router-dom',
    commonjs2: 'react-router-dom',
    cdn: {
      development: `${process.env['business.cdn']}/react-router-dom/5.2.0/react-router-dom.js`,
      production: `${process.env['business.cdn']}/react-router-dom/5.2.0/react-router-dom.min.js`,
    },
  },
  redux: {
    root: 'Redux',
    amd: 'redux',
    commonjs: 'redux',
    commonjs2: 'redux',
    cdn: {
      development: `${process.env['business.cdn']}/redux/4.0.1/redux.js`,
      production: `${process.env['business.cdn']}/redux/4.0.1/redux.min.js`,
    },
  },
  'redux-saga': {
    root: 'ReduxSaga',
    amd: 'redux-saga',
    commonjs: 'redux-saga',
    commonjs2: 'redux-saga',
    cdn: {
      development: `${process.env['business.cdn']}/redux-saga/0.16.2/redux-saga.js`,
      production: `${process.env['business.cdn']}/redux-saga/0.16.2/redux-saga.min.js`,
    },
  },
  'react-router-redux': {
    root: 'ReactRouterRedux',
    amd: 'react-router-redux',
    commonjs: 'react-router-redux',
    commonjs2: 'react-router-redux',
    cdn: {
      development: `${process.env['business.cdn']}/react-router-redux/4.0.8/ReactRouterRedux.js`,
      production: `${process.env['business.cdn']}/react-router-redux/4.0.8/ReactRouterRedux.min.js`,
    },
  },
  'react-redux': {
    root: 'ReactRedux',
    amd: 'react-redux',
    commonjs: 'react-redux',
    commonjs2: 'react-redux',
    cdn: {
      development: `${process.env['business.cdn']}/react-redux/7.1.0/react-redux.js`,
      production: `${process.env['business.cdn']}/react-redux/7.1.0/react-redux.min.js`,
    },
  },
  'redux-actions': {
    root: 'ReduxActions',
    amd: 'redux-actions',
    commonjs: 'redux-actions',
    commonjs2: 'redux-actions',
    cdn: {
      development: `${process.env['business.cdn']}/redux-actions/2.6.4/redux-actions.js`,
      production: `${process.env['business.cdn']}/redux-actions/2.6.4/redux-actions.min.js`,
    },
  },
  'dva-core': {
    root: 'DvaCore',
    amd: 'dva-core',
    commonjs: 'dva-core',
    commonjs2: 'dva-core',
    cdn: {
      development: `${process.env['business.cdn']}/dva-core/2.0.1/dva-core.js`,
      production: `${process.env['business.cdn']}/dva-core/2.0.1/dva-core.min.js`,
    },
  },
  'dva-model-creator': {
    root: 'DvaModelCreator',
    amd: 'dva-model-creator',
    commonjs: 'dva-model-creator',
    commonjs2: 'dva-model-creator',
    cdn: {
      development: `${process.env['business.cdn']}/dva-model-creator/0.4.3/dva-model-creator.js`,
      production: `${process.env['business.cdn']}/dva-model-creator/0.4.3/dva-model-creator.min.js`,
    },
  },
  '@gmsoft/event-bus': {
    root: 'EventBus',
    amd: '@gmsoft/event-bus',
    commonjs: '@gmsoft/event-bus',
    commonjs2: '@gmsoft/event-bus',
    cdn: {
      development: `${process.env['business.cdn']}/event-bus/1.4.0/event-bus.umd.js`,
      production: `${process.env['business.cdn']}/event-bus/1.4.0/event-bus.umd.js`,
    },
  },
  'state-container': {
    root: 'StateContainer',
    amd: 'state-container',
    commonjs: 'state-container',
    commonjs2: 'state-container',
    cdn: {
      development: `${process.env['business.cdn']}/state-container/1.5.0/state-container.js`,
      production: `${process.env['business.cdn']}/state-container/1.5.0/state-container.min.js`,
    },
  },
  axios: {
    root: 'axios',
    amd: 'axios',
    commonjs: 'axios',
    commonjs2: 'axios',
    cdn: {
      development: `${process.env['business.cdn']}/axios/0.24.0/axios.js`,
      production: `${process.env['business.cdn']}/axios/0.24.0/axios.min.js`,
    },
  },
  reselect: {
    root: 'Reselect',
    amd: 'reselect',
    commonjs: 'reselect',
    commonjs2: 'reselect',
    cdn: {
      development: `${process.env['business.cdn']}/reselect/4.0.0/reselect.js`,
      production: `${process.env['business.cdn']}/reselect/4.0.0/reselect.min.js`,
    },
  },
  'react-virtualized': {
    root: 'ReactVirtualized',
    amd: 'react-virtualized',
    commonjs: 'react-virtualized',
    commonjs2: 'react-virtualized',
    cdn: {
      development: `${process.env['business.cdn']}/react-virtualized/9.21.0/react-virtualized.js`,
      production: `${process.env['business.cdn']}/react-virtualized/9.21.0/react-virtualized.min.js`,
    },
  },
  'react-virtualized-tree': {
    root: 'reactVirtualizedTree',
    amd: 'react-virtualized-tree',
    commonjs: 'react-virtualized-tree',
    commonjs2: 'react-virtualized-tree',
    cdn: {
      development: `${process.env['business.cdn']}/react-virtualized-tree/2.0.2/react-virtualized-tree.js`,
      production: `${process.env['business.cdn']}/react-virtualized-tree/2.0.2/react-virtualized-tree.min.js`,
    },
  },
  qs: {
    root: 'Qs',
    amd: 'qs',
    commonjs: 'qs',
    commonjs2: 'qs',
    cdn: {
      development: `${process.env['business.cdn']}/qs/6.9.3/qs.js`,
      production: `${process.env['business.cdn']}/qs/6.9.3/qs.js`,
    },
  },
  '@gmsoft/auth-sdk': {
    root: 'AuthSDK',
    amd: '@gmsoft/auth-sdk',
    commonjs: '@gmsoft/auth-sdk',
    commonjs2: '@gmsoft/auth-sdk',
    cdn: {
      development: `${process.env['business.cdn']}/auth-sdk/1.6.1/auth-sdk.umd.js`,
      production: `${process.env['business.cdn']}/auth-sdk/1.6.1/auth-sdk.umd.js`,
    },
  },
  '@gmsoft/tt-sdk': {
    root: 'TTSDK',
    amd: '@gmsoft/tt-sdk',
    commonjs: '@gmsoft/tt-sdk',
    commonjs2: '@gmsoft/tt-sdk',
    cdn: {
      development: `${process.env['business.cdn']}/tt-sdk/1.6.0/tt-sdk.umd.js`,
      production: `${process.env['business.cdn']}/tt-sdk/1.6.0/tt-sdk.umd.js`,
    },
  },
});
