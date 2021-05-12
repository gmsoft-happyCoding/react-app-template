/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-08-23 14:41:12
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2019-09-02 17:03:54
 * @Description: Nothing
 */
import { PUBLIC_METHODS } from '@/constant/namespace';

export interface UserInfo {
  admin?: boolean;
  expiresIn?: number;
  iat?: number;
  orgId?: string;
  orgName?: string;
  orgType?: number;
  userId?: string;
  userName?: string;
  userTypes?: string;
  adminAreaId?: string;
}

export interface State {
  userInfo: UserInfo;
}

export interface publicMethodsState {
  [PUBLIC_METHODS]: State;
}
