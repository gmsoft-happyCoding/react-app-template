import { createActions } from 'redux-actions';
import { identity } from 'ramda';

export default createActions({
  whatToEat: {
    draw: identity,
    search: identity,
    searchImg: identity,
    setResult: identity,
  },
});
