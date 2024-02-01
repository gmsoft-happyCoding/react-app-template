import { createAPI } from '../util';

const baseUrl = process.env['gateway.demo'];

export default createAPI(baseUrl);
