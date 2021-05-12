import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1009;
`;

const StyledSpin = styled(Spin)`
  padding: 20px 0;
  position: relative;
  top: 30%;
`;

type Props = {
  tip?: string;
  style?: React.CSSProperties;
};

export default function Loading(props: Props) {
  const { tip, style } = props;

  return (
    <Wrap style={style}>
      <StyledSpin tip={tip} />
    </Wrap>
  );
}

Loading.defaultProps = {
  tip: '数据加载中',
};
