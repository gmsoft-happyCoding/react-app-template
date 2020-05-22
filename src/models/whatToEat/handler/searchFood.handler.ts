import { DvaModelBuilder } from 'dva-model-creator';
import { whatToEat } from '@/api';
import { searchFood } from '../whatToEat.actions';
import { State } from '../whatToEat.model';

export default (modelBuilder: DvaModelBuilder<State>) => {
  /**
   * 搜索食物图片
   */
  modelBuilder
    .takeLatest(searchFood.started, function* _searchFood(name, { call, put }) {
      const BASE = 10;
      // eslint-disable-next-line no-bitwise
      const random = ((Math.random() * 10000) | 0) % BASE;

      // 通过接口随机获取今天吃的东西的图片
      const {
        data: { list },
      } = yield call(whatToEat.img_get, {
        params: {
          q: name,
          sn: random,
          pn: BASE,
        },
      });
      // 保存数据到store
      if (list && list.length > 0) {
        yield put(
          searchFood.done({
            params: name,
            result: {
              name,
              img: list[Math.max(random, list.length - 1)].img,
            },
          })
        );
      }
    })
    .case(searchFood.done, (state, payload) => payload.result);
};
