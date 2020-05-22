import React, { useState, useEffect } from 'react';
import { Button, Card, Input, Switch } from 'antd';
import { useActions } from 'gm-react-hanger';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Mode } from '@/enums/Mode';
import * as whatToEatActions from '@/models/whatToEat/whatToEat.actions';
import whatToEatMode, { WhatToEatState } from '@/models/whatToEat/whatToEat.model';
import { stateContainer } from '@/utils';
import { WHAT_TO_EAT } from '@/constant/namespace';
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
   * 初始模式
   * @workflow - 此注解标识该prop, 需要工作流设计器配置
   * 为生成元数据提供枚举值
   * @enumType draw | search
   * @default draw
   */
  defaultMode: Mode;
  /**
   * 模式
   * 组件mount后, 可通过 mode 改变组件模式
   * @enumType draw | search
   */
  mode?: Mode;
}

/**
 * 描述...
 * @workflow
 */
const WhatToEat = (props: Props) => {
  const { defaultMode, mode: propMode } = props;

  const [mode, setMode] = useState(defaultMode);

  useEffect(() => {
    if (propMode) setMode(propMode);
  }, [propMode]);

  const switchMode = (checked: boolean) => {
    setMode(checked ? Mode.SEARCH : Mode.DRAW);
  };

  const food = useSelector((state: WhatToEatState) => state[WHAT_TO_EAT]);

  const { draw, searchFood } = useActions(whatToEatActions);

  return (
    <FoodCard
      actions={[
        mode === Mode.DRAW ? (
          // @ts-ignore
          <Button type="primary" onClick={draw}>
            Let me see
          </Button>
        ) : (
          <Search
            style={{ width: 'auto' }}
            onSearch={searchFood.started}
            placeholder="输入关键字 - 回车"
          />
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
