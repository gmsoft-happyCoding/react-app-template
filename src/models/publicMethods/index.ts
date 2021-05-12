import publicMethodsModel from './publicMethods.model';
import * as publicMethodsAction from './publicMethods.action';

export interface ActionMember {
  login: () => void;
  getUserInfo: () => void;
}

/**
 *  用户信息
 */
export { publicMethodsModel, publicMethodsAction };
