import { createAPI } from '../util';

// mock server: 'http://easy-mock.gm/mock/5c514bf9cd2f550e9dfbb515/'
const baseUrl = process.env['gateway.djc'];

export default createAPI(baseUrl);
