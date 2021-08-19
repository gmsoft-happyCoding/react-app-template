/* eslint-disable @typescript-eslint/no-require-imports */
const proxy = require('http-proxy-middleware');

const proxyRules = {
  test1: [
    {
      path: '/gwebsite',
      target: 'https://www.cqzcjtest1.gm',
    },
    {
      path: '/djc-gateway',
      target: 'https://www.cqzcjtest1.gm',
    },
    {
      path: '/yw-gateway',
      target: 'https://www.cqzcjtest1.gm',
    },
    {
      path: '/gateway',
      target: 'https://www.cqzcjtest1.gm',
    },
    {
      path: '/trade',
      target: 'https://www.cqzcjtest1.gm',
    },
    {
      path: '/finance',
      target: 'https://www.xcjtest1.gm',
    },
    {
      path: '/baseconf',
      target: 'https://www.cqzcjtest1.gm',
    },
  ],
  show: [
    {
      path: '/gwebsite',
      target: 'https://www.gpwbeta.com',
    },
    {
      path: '/djc-gateway',
      target: 'https://www.cqzcjshow.com',
    },
    {
      path: '/yw-gateway',
      target: 'https://www.gpwbeta.com',
    },
    {
      path: '/trade',
      target: 'http://192.168.2.12:8050',
    },
    {
      path: '/finance',
      target: 'https://www.cqzcjshow.com',
    },
    {
      path: '/baseconf',
      target: 'https://www.cqzcjshow.com',
    },
    {
      path: '/gateway',
      target: 'https://www.cqzcjshow.com',
    },
  ],
};

function genProxy(app) {
  const proxyPlatform = process.env.REACT_APP_PROXY_PLATFORM || 'test';
  const proxyConf = proxyRules[proxyPlatform];
  proxyConf.map(conf => {
    app.use(
      conf.path,
      proxy({
        target: conf.target,
        changeOrigin: true,
        secure: false,
      })
    );
  });
}

module.exports = genProxy;
