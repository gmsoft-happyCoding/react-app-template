import React from 'react';
import { Spin } from 'antd';
import { SpinProps } from 'antd/es/spin';
import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
`;

const StyledSpin = styled(Spin)<SpinProps>`
  padding: 20px 0;
`;

type Props = {
  /**
   * 提示文字
   * @default 数据加载中
   */
  tip?: string;
};

const Loading = (props: Props) => {
  const { tip } = props;

  return (
    <Wrap>
      <StyledSpin tip={tip} />
    </Wrap>
  );
};

Loading.defaultProps = { tip: '数据加载中' };
export default Loading;
