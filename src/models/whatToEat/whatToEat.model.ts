import { DvaModelBuilder } from 'dva-model-creator';
import { Food } from '@/types/Food.d';
import { whatToEat } from '@/api';
import { AxiosResponse } from 'axios';
import * as whatToEatActions from './whatToEat.action';
import { WHAT_TO_EAT } from '@/constant/namespace';
import { notification } from '@/utils';

export { WHAT_TO_EAT };
export interface WhatToEatState {
  [WHAT_TO_EAT]: Food;
}

const defaultState = () => ({} as Food);

const model = new DvaModelBuilder<Food>(defaultState(), WHAT_TO_EAT)
  /**
   * 随机抽取
   */
  .takeLatest(whatToEatActions.draw, function* draw(_, { call, put }) {
    try {
      // 通过接口随机获取今天吃什么?
      const {
        data: { name },
      }: AxiosResponse<Food> = yield call(whatToEat.what_to_eat_get, {});
      yield put(whatToEatActions.searchImg(name));
      yield put(whatToEatActions.setResult({ name }));
    } catch (e) {
      notification.ajaxError(e);
    }
  })
  /**
   * 关键字搜索
   */
  .takeLatest(whatToEatActions.search, function* search(payload, { put }) {
    try {
      yield put(whatToEatActions.searchImg(payload));
      yield put(whatToEatActions.setResult({ name: payload }));
    } catch (e) {
      notification.ajaxError(e);
    }
  })
  /**
   * 搜索图片
   */
  .takeLatest(whatToEatActions.searchImg, function* searchImg(payload, { call, put }) {
    const BASE = 10;
    // eslint-disable-next-line no-bitwise
    const random = ((Math.random() * 10000) | 0) % BASE;
    try {
      // 通过接口随机获取今天吃的东西的图片
      const {
        data: { list },
      } = yield call(whatToEat.img_get, {
        params: {
          q: payload,
          sn: random,
          pn: BASE,
        },
      });
      // 保存数据到store
      if (list && list.length > 0) {
        yield put(
          whatToEatActions.setResult({
            name: payload,
            img: list[Math.max(random, list.length - 1)].img,
          })
        );
      }
    } catch (e) {
      notification.ajaxError(e);
    }
  })
  .case(whatToEatActions.setResult, (state, payload) => ({ ...state, ...payload }))
  .build();

export default model;
