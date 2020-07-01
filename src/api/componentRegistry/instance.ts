/* eslint-disable */
import { createAPI } from '../util';

// mock server: 'http://easy-mock.gm/mock/5c7c941504e77820f451b643/'
const baseUrl = process.env.REACT_APP_COMPONENT_REGISTRY_SERVER;

export default createAPI(baseUrl);
