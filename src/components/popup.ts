import { notification, message, Modal } from 'antd';
import NOTINSIDE from '@/utils/judgeIframe';

/** 弹层类型 */
export enum ModalType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  CONFIRM = 'confirm',
  INFO = 'info',
}

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  WARN = 'warn',
  LOADING = 'loading',
  INFO = 'info',
}

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  WARN = 'warn',
  OPEN = 'open',
  INFO = 'info',
}

// type success,error,info,warning,warn
const notificationPop = (
  type: NotificationType = NotificationType.ERROR,
  title: string = '错误',
  describe?: React.ReactNode,
  onlyKey?: any,
  durationTime: number = 3,
  onClose: () => void = () => {}
) => {
  if (!NOTINSIDE && window.top.eventBus) {
    const eventKey = `antd.notification.${type}` as EventKey;
    window.top.eventBus.emit(eventKey, {
      key: onlyKey,
      message: title,
      description: describe,
      duration: durationTime,
      onClose,
    });
  } else {
    notification[type]({
      key: onlyKey,
      message: title,
      description: describe,
      duration: durationTime,
      onClose,
    });
  }
};

/**
 emit(methodName,message, cb, title, width, height)
 @parame  alert,warning,success,confirm,error   对应antd的 type
*/
const messagePop = (
  type: MessageType = MessageType.SUCCESS,
  content: React.ReactNode = '成功',
  onClose?: () => void,
  duration: number = 4
) => {
  if (!NOTINSIDE && window.top.eventBus) {
    const eventKey = `antd.message.${type}` as EventKey;
    window.top.eventBus.emit(eventKey, content, duration, onClose);
  } else {
    message[type](content, duration, onClose);
  }
};

const modalPop = (
  type: ModalType = ModalType.SUCCESS,
  title: string = '成功',
  content: React.ReactNode = '操作成功',
  onOk?: () => void,
  onCancel?: () => void,
  okText?: string,
  cancelText?: string,
  zIndex?: number
) => {
  if (!NOTINSIDE && window.top.eventBus) {
    const eventKey = `antd.Modal.${type}` as EventKey;
    window.top.eventBus.emit(eventKey, {
      onOk,
      content,
      title,
      onCancel,
      okText: okText || '确认',
      cancelText: cancelText || '取消',
      zIndex,
    });
  } else {
    Modal[type]({
      onOk,
      content,
      title,
      onCancel,
      okText: okText || '确认',
      cancelText: cancelText || '取消',
      zIndex,
    });
  }
};

export { messagePop, modalPop };
export default notificationPop;
