import { createAPI } from '../util';

// mock server: 'http://easy-mock.gm/mock/5c514bf9cd2f550e9dfbb515/'
const baseUrl = process.env.REACT_APP_API_GATEWAY_BASE;

export default createAPI(baseUrl);
