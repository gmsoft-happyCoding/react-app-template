/* eslint-disable */
import { createAPI } from '../util';

// mock server: 'http://easy-mock.gm/mock/5bc45680acb9922af8f7f803/login'
const baseUrl = process.env.REACT_APP_DJC_GATEWAY;

export default createAPI(baseUrl);
