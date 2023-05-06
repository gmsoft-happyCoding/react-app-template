/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
const path = require('path');
const systemModules = require('./config/systemModules');
const externals = require('./config/externals');

const getClientEnvironment = require('./config/env');

const env = getClientEnvironment();
const cdnServer = env.raw.REACT_APP_CDN_SERVER;

const links = ['antd/3.26.20-custom.4/antd.css'];

const scripts = [
  'polyfill/1.0.6/polyfill.js',
  'react/17.0.1/react.development.js',
  'react-is/17.0.1/react-is.development.js',
  'react-dom/17.0.1/react-dom.development.js',
  'moment/2.27.0/moment.js',
  'moment/2.27.0/locale.zh-cn.js',
  'moment/use-locale.js',
  'antd/3.26.20-custom.4/antd.js',
  'styled-components/4.1.1/styled-components.js',
  'history/4.7.2/history.js',
  'react-router-dom/5.2.0/react-router-dom.js',
  'redux/4.0.1/redux.js',
  'redux-saga/0.16.2/redux-saga.js',
  'react-router-redux/4.0.8/ReactRouterRedux.js',
  'react-redux/7.1.0/react-redux.js',
  'redux-actions/2.6.4/redux-actions.js',
  'reselect/4.0.0/reselect.js',
  'react-virtualized/9.21.0/react-virtualized.js',
  'react-virtualized-tree/2.0.2/react-virtualized-tree.js',
  'dva-core/2.0.1/dva-core.js',
  'dva-model-creator/0.4.3/dva-model-creator.js',
  'immer/1.8.0/immer.umd.js',
  'event-bus/1.2.0/event-bus.umd.js',
  'axios/0.18.1/axios.js',
  'state-container/1.5.0/state-container.js',
  'qs/6.9.3/qs.js',
  'auth-sdk/1.6.0/auth-sdk.umd.js',
  'tt-sdk/1.4.0/tt-sdk.umd.js',
  'systemjs/0.21.5/system.src.js',
];

module.exports = {
  styleguideDir: 'build/doc',
  webpackConfig:
    process.env.NODE_ENV === 'production'
      ? require('./config/webpack.config.prod.js')
      : require('./config/webpack.config.dev.js'),
  // WARNING: inspect Styleguidist Webpack config before modifying it,
  // otherwise you may break Styleguidist
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    // eslint-disable-next-line no-param-reassign
    webpackConfig.externals = externals();
    return webpackConfig;
  },
  theme: {
    fontSize: {
      small: 14,
    },
  },
  previewDelay: 0,
  components: 'src/**/[A-Z]*.tsx',
  ignore: ['src/**/Cover*'],
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  usageMode: 'expand',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    shouldExtractLiteralValuesFromEnum: true,
  }).parse,
  template: {
    head: {
      raw: process.env.NODE_ENV === 'production' ? '<base href="doc/">' : '',
      links: links.map(link => ({ rel: 'stylesheet', href: `${cdnServer}/${link}` })),
      scripts: scripts.map(script => ({ crossorigin: 'anonymous', src: `${cdnServer}/${script}` })),
    },
    body: {
      raw: `<script>${systemModules}</script>`,
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/DocWrapper'),
    JsDoc: path.join(__dirname, 'src/styleguide/JsDoc'),
  },
  styles: {
    Table: {
      cell: {
        borderBottom: '1px solid #dedede',
        minWidth: '180px',
      },
    },
  },
};
