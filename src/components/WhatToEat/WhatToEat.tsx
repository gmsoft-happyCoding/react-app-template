import React, { useState, useEffect, useCallback } from 'react';
import { Mode } from '@/enums/Mode';
import * as whatToEatActions from '@/models/whatToEat/whatToEat.action';
import whatToEatMode, { WhatToEatState, WHAT_TO_EAT } from '@/models/whatToEat/whatToEat.model';
import { Button, Card, Input, Switch } from 'antd';
import { stateContainer } from '@/utils';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Cover from './Cover';

const { Search } = Input;

stateContainer.injectModel(whatToEatMode);

const FoodCard = styled(Card)`
  width: 70%;
  min-width: 700px;
  max-width: 900px;
  margin: 5vh auto;
`;

const ModeSwitch = styled.div`
  text-align: center;
  padding-top: 5px;
`;

interface Props {
  /**
   * 初始模式 -
   * 注意: 此处不能使用 Mode 只能这样写, 不然 docz 和 生成组件元数据时都不能正确的识别出类型
   * @workflow - 此注解标识标识该prop, 需要工作流设计器配置
   * @default draw
   */
  defaultMode: 'draw' | 'search';
  /**
   * 模式 -
   * 组件mount后, 可通过 mode 改变组件模式
   */
  mode?: 'draw' | 'search';
}

/**
 * 描述...
 * @workflow
 */
const WhatToEat = (props: Props) => {
  const { defaultMode, mode: propMode } = props;

  const [mode, setMode] = useState(defaultMode as Mode);

  const food = useSelector((state: WhatToEatState) => state[WHAT_TO_EAT]);

  useEffect(() => {
    if (propMode) setMode(propMode as Mode);
  }, [propMode]);

  const switchMode = (checked: boolean) => {
    setMode(checked ? Mode.SEARCH : Mode.DRAW);
  };

  const dispatch = useDispatch();

  const draw = useCallback(() => {
    dispatch(whatToEatActions.draw);
  }, [dispatch]);

  const search = useCallback(
    keyWords => {
      dispatch(whatToEatActions.search(keyWords));
    },
    [dispatch]
  );

  return (
    <FoodCard
      actions={[
        mode === Mode.DRAW ? (
          <Button type="primary" block onClick={draw}>
            Let me see
          </Button>
        ) : (
          <Search onSearch={search} placeholder="输入关键字 - 回车" />
        ),
        <ModeSwitch>
          手动搜索:{' '}
          <Switch
            defaultChecked={mode === Mode.SEARCH}
            checked={mode === Mode.SEARCH}
            onChange={switchMode}
          />
        </ModeSwitch>,
      ]}
    >
      <Cover url={food.img} name={food.name} />
    </FoodCard>
  );
};

WhatToEat.defaultProps = {
  defaultMode: Mode.DRAW,
};

export default WhatToEat;
