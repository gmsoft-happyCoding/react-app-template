/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-08-08 20:50:43
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2019-09-02 17:22:21
 * @Description: Nothing
 */
import { DvaModelBuilder } from 'dva-model-creator';
import { AxiosResponse } from 'axios';
import product from 'immer';
import { login as API_LOGIN } from '@/api';
import { PUBLIC_METHODS } from '@/constant/namespace';
import notificationPop, { NotificationType } from '@/components/popup';
import * as publicMethodsActions from './publicMethods.action';
import { State, UserInfo } from './index.d';

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
      const { data }: AxiosResponse<UserInfo> = yield call(API_LOGIN.me_get, {
        params: {
          blacklist: 'user,mapper',
        },
      });
      yield put(publicMethodsActions.setUserInfo(data));
    } catch (e) {
      notificationPop(NotificationType.ERROR, '错误', e.message);
    }
  })
  /** 设置 用户信息 */
  .case(publicMethodsActions.setUserInfo, (state, payload) =>
    product(state, draft => {
      // eslint-disable-next-line no-param-reassign
      draft.userInfo = payload;
    })
  )
  .build();

export default model;
