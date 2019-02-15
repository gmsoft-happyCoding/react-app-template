import { Button, Card, Input, Switch } from 'antd';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ActionCreatorsMapObject } from 'redux';
import styled from 'styled-components';
import { Mode } from '../../enums/Mode';
import whatToEatActions from '../../models/whatToEat/whatToEat.action';
import whatToEatMode from '../../models/whatToEat/whatToEat.model';
import { Food } from '../../types/Food.d';
import { bindActions, stateContainer } from '../../utils';
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

interface OwnProps {
  /**
   * 初始模式
   * 注意: 此处不能使用 Mode 只能这样写, 不然 docz 和 生成组件元数据时都不能正确的识别出类型
   * @default draw
   */
  defaultMode: 'draw' | 'search';
}

interface StateProps {
  food: Food;
}

interface DispatchProps {
  whatToEatBoundActions: ActionCreatorsMapObject;
}

type Props = StateProps & DispatchProps & OwnProps;

export const WhatToEat = (props: Props) => {
  const { defaultMode, food, whatToEatBoundActions } = props;
  const [mode, setMode] = useState(defaultMode as Mode);

  const switchMode = (checked: boolean) => {
    setMode(checked ? Mode.SEARCH : Mode.DRAW);
  };

  const { draw, search } = whatToEatBoundActions;

  return (
    <>
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
    </>
  );
};

WhatToEat.defaultProps = {
  defaultMode: Mode.DRAW,
} as OwnProps;

const mapStateToProps = ({ whatToEat }: any) => ({ food: whatToEat });

const mapDispatchToProps = bindActions(whatToEatActions);

/**
 * 描述...
 * @workflow
 */
export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(WhatToEat);
