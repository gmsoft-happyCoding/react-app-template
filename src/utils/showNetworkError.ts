import { get } from 'lodash';
import { notification } from '@gmsoft/ui';

export default err =>
  notification.error({
    message: '请求错误!',
    description: get(err, 'response.data.msg') || get(err, 'response.data.error'),
  });
