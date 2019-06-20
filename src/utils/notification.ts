/* eslint-disable no-restricted-globals */
import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';
import { AxiosError } from 'axios';

type NoticeType = 'info' | 'success' | 'error' | 'warning';

const createNotify = (type: NoticeType) => (config: ArgsProps) => {
  if (top.eventBus) {
    top.eventBus.emit(`antd.notification.${type}` as EventKey, config);
  } else {
    notification[type](config);
  }
};

export const info = createNotify('info');
export const success = createNotify('success');
export const error = createNotify('error');
export const warning = createNotify('warning');
export const ajaxError = (e: AxiosError) =>
  error({
    message: '请求错误',
    description: `${e.message}`,
  });
