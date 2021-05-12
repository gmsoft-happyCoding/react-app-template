/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-08-14 16:22:23
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2019-09-02 15:50:41
 * @Description: Nothing
 */
import { actionCreatorFactory } from 'dva-model-creator';
import { PUBLIC_METHODS } from '@/constant/namespace';
import { UserInfo } from './index.d';

const actionCreator = actionCreatorFactory(PUBLIC_METHODS);

export const login = actionCreator<void>('login');

export const getUserInfo = actionCreator<void>('getUserInfo');

export const setUserInfo = actionCreator<UserInfo>('setUserInfo');
