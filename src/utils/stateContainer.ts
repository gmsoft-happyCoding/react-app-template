import { create } from 'state-container';
import history from './history';

const stateContainer = create({
  history,
  NODE_ENV: process.env.NODE_ENV,
  useGlobalContextPlugin: true,
  globalContextOpts: {
    appName: '{{projectName}}',
    djcGatewayBaseUrl: process.env.REACT_APP_DJC_GATEWAY_BASE,
  },
  onError: err => {
    // err.preventDefault();
    /* eslint-disable no-console */
    console.error(err);
  },
});

export default stateContainer;
