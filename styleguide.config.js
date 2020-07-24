/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const systemModules = require('./config/systemModules');
const externals = require('./config/externals');

const getClientEnvironment = require('./config/env');

const env = getClientEnvironment();
const cdnServer = env.raw.REACT_APP_CDN_SERVER;

const links = ['antd/3.23.4-custom.0/antd.css'];

const scripts = [
  'polyfill/1.0.5/polyfill.js',
  'react/16.8.6/react.development.js',
  'react-dom/16.8.6/react-dom.development.js',
  'moment/2.22.2/moment.js',
  'moment/2.22.2/locale.zh-cn.js',
  'moment/use-locale.js',
  'antd/3.26.2-custom.0/antd.js',
  'styled-components/4.1.1/styled-components.js',
  'history/4.7.2/history.js',
  'react-router-dom/4.3.1/react-router-dom.js',
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
  'state-container/1.1.0/state-container.js',
  'axios/0.18.1/axios.js',
  'qs/6.9.3/qs.js',
  'systemjs/0.21.5/system.src.js',
];

module.exports = {
  styleguideDir: 'build/doc',
  webpackConfig: require('./config/webpack.config.dev.js'),
  // WARNING: inspect Styleguidist Webpack config before modifying it,
  // otherwise you may break Styleguidist
  dangerouslyUpdateWebpackConfig(webpackConfig) {
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
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
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
