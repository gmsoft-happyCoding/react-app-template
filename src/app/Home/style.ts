import styled from 'styled-components';
import { Layout as _Layout } from 'antd';
import judgeIframe from '@/utils/judgeIframe';

export const LoggoBox = styled.div`
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  padding: 16px;
`;

export const Content = styled.div`
  position: ${judgeIframe ? 'absolute' : 'relative'};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: ${judgeIframe ? '250px' : 0};
  min-width: 1150px;
  padding: ${judgeIframe ? '10px' : 0};
  background: #f0f2f5;
`;

export const Layout = styled(_Layout)`
  background: #fff;
  padding: 15;
`;
