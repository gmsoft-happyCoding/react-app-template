import { DvaModelBuilder } from 'dva-model-creator';
import { AxiosResponse } from 'axios';
import { whatToEat } from '@/api';
import { Food } from '@/types/Food';
import { draw, searchFood } from '../whatToEat.actions';
import { State } from '../whatToEat.model';

export default (modelBuilder: DvaModelBuilder<State>) => {
  /**
   * 随机抽取
   */
  modelBuilder.takeLatest(draw, function* _draw(_, { call, put }) {
    // 通过接口随机获取今天吃什么?
    const {
      data: { name },
    }: AxiosResponse<Food> = yield call(whatToEat.what_to_eat_get, {});
    /**
     * 如果需要等待 searchFood.started 执行完成
     * 可以使用 put.resolve
     */
    yield put(searchFood.started(name));
  });
};
