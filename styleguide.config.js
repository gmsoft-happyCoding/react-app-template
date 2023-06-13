/* eslint-disable @typescript-eslint/no-require-imports, no-param-reassign, global-require  */
const path = require('path');
const systemScripts = require('./config/systemScripts');
const externals = require('./config/externals');

const getClientEnvironment = require('./config/env');

const env = getClientEnvironment();
const cdnServer = env.raw['business.CDN_SERVER'];

const links = ['antd/3.26.20-custom.4/antd.css'];

const scripts = ['polyfill/1.0.6/polyfill.js'];

module.exports = {
  styleguideDir: 'build/doc',
  webpackConfig:
    process.env.NODE_ENV === 'production'
      ? require('./config/webpack.config.prod.js')
      : require('./config/webpack.config.dev.js'),
  // WARNING: inspect Styleguidist Webpack config before modifying it,
  // otherwise you may break Styleguidist
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    webpackConfig.externals = externals();
    webpackConfig.output = { ...webpackConfig.output, libraryTarget: 'umd' };
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
      raw: systemScripts,
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
