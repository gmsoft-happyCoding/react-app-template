import { create } from 'state-container';
import history from './history';

const origin =
  process.env.NODE_ENV === 'development'
    ? `https://${process.env['business.dev-plat-domain']}`
    : undefined;

const stateContainer = create({
  history,
  NODE_ENV: process.env.NODE_ENV,
  useGlobalContextPlugin: true,
  globalContextOpts: {
    appName: '{{projectName}}',
    djcGatewayBaseUrl: process.env['gateway.djc'],
    origin,
    meOrigin: origin,
  },
  onError: err => {
    // err.preventDefault();
    /* eslint-disable no-console */
    console.error(err);
  },
});

export default stateContainer;
