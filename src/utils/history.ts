import { createBrowserHistory } from 'history';
import { getConfirmation } from './confirmation';
import getBase from './getBase';

const history = createBrowserHistory({
  basename: getBase(),
  getUserConfirmation: getConfirmation,
});

export default history;
