/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */

const getBaseParams = require('./common/commonParams');

const envParams = {
  domain: 'localhost:3000',
  zcjDomain: 'localhost:3000',
  xcjDomain: 'localhost:3000',
  cdnDomain: 'cdn.gm',
  registriesServer: 'registry.gmsofttest.com',
  publickDir: '{{projectName}}',
};

module.exports = {
  envs: {
    ...getBaseParams(envParams),
  },
  plugins: [require('./plugins/plugin-choosePlatform')],
};
