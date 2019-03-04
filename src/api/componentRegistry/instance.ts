/* eslint-disable */
import { createAPI } from '../util';

// mock server: 'http://192.168.2.11:7300/mock/5c7c941504e77820f451b643/'
const baseUrl = process.env.REACT_APP_COMPONENT_REGISTRY_SERVER;

export default createAPI(baseUrl);
