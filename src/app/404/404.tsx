import React from 'react';
import { Result } from 'antd';
import styled from 'styled-components';

const Layout = styled.div`
  background-color: white;
`;

function NotFound() {
  return (
    <Layout>
      <Result
        status="404"
        title="页面未找到，请确认链接正确性，且具备适当的权限"
        subTitle="404 Not-Found,check the link is correct and has permissions"
        // extra={<Button type="primary">Back Home</Button>}
      />
    </Layout>
  );
}

export default NotFound;
