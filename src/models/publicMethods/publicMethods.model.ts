import { DvaModelBuilder } from 'dva-model-creator';
import { PUBLIC_METHODS } from '@/constant/namespace';
import notificationPop, { NotificationType } from '@/components/popup';
import { requestMeTrySSO } from '@gmsoft/auth-sdk';
import { stateContainer } from '@/utils';
import * as publicMethodsActions from './publicMethods.action';
import { State } from './index.d';

export { PUBLIC_METHODS };

const defaultState = () => ({
  userInfo: {},
});

const model = new DvaModelBuilder<State>(defaultState(), PUBLIC_METHODS)
  /**
   * 登录
   */
  .takeLatest(publicMethodsActions.login, function* login(payload, { put }) {
    try {
      yield put(publicMethodsActions.getUserInfo());
    } catch (e) {
      notificationPop(NotificationType.ERROR, '错误', e.message);
    }
  })
  /**
   * 获取用户信息
   */
  .takeLatest(publicMethodsActions.getUserInfo, function* getUserInfo(payload, { call, put }) {
    try {
      const userInfo = yield call(requestMeTrySSO, {
        djcGatewayBaseUrl: process.env.REACT_APP_DJC_GATEWAY,
        dispatch: stateContainer._store.dispatch,
      });
      yield put(publicMethodsActions.setUserInfo(userInfo));
    } catch (e) {
      notificationPop(NotificationType.ERROR, '错误', e.message);
    }
  })
  /** 设置 用户信息 */
  .case(publicMethodsActions.setUserInfo, (state, payload) => ({ userInfo: payload }))
  .build();

export default model;
