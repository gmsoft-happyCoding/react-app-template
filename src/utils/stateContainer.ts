import { create } from 'state-container';
import history from './history';

const stateContainer = create({
  history,
  NODE_ENV: process.env.NODE_ENV,
  onError: err => {
    // err.preventDefault();
    /* eslint-disable no-console */
    console.error(err);
  },
});

export default stateContainer;
