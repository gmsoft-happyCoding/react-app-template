/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
const DeployType = require('./common/deploy-type');
const getBaseParams = require('./common/commonParams');

const envParams = {
  domain: 'www.gec123.com',
  zcjDomain: 'www.ccgp-chongqing.gov.cn',
  xcjDomain: 'www.gec123.com',
  cdnDomain: 'cdn.gec123.com',
  registriesServer: 'registry.gec123.com',
  publickDir: '{{projectName}}',
};

module.exports = {
  envs: {
    ...getBaseParams(envParams),
    // 默认为SCP部署，生产环境请注意此处单独配置为ZIP
    REACT_APP_DEPLOY_TYPE: DeployType.ZIP,
    REACT_APP_DEPLOY_MACHINES: [
      { machine: 'machine1', where: [{ rootKey: 'nginx.websrc', path: '{{projectName}}' }] },
      { machine: 'machine2', where: [{ rootKey: 'nginx.websrc', path: '{{projectName}}' }] },
    ],
  },
};
