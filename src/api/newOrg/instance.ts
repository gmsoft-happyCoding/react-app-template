/* eslint-disable */
import { createAPI } from '../util';

// mock server: 'http://easy-mock.gm/mock/5e20129203b7ea0b2a310a7d/org'
const baseUrl = process.env.REACT_APP_DJC_GATEWAY;

export default createAPI(baseUrl);
