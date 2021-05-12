/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
const getBaseParams = require('./common/commonParams');

const envParams = {
  domain: 'www.gpwtest.com',
  zcjDomain: 'www.gpwtest.com',
  xcjDomain: 'www.cqzcjtest.com',
  cdnDomain: 'cdn.gm',
  registriesServer: 'registry.cqzcjtest.com',
  publickDir: '{{projectName}}',
};

module.exports = {
  envs: {
    ...getBaseParams(envParams),
    REACT_APP_DEPLOY_MACHINES: [
      { machine: 'machine1', where: [{ rootKey: 'nginx.websrc', path: '{{projectName}}' }] },
      { machine: 'machine2', where: [{ rootKey: 'nginx.websrc', path: '{{projectName}}' }] },
    ],
  },
};
