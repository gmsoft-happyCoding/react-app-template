import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import judgeIframe from '@/utils/judgeIframe';
import IframeFindFocus from '@/components/IframeFindFocus/IframeFindFocus';
import LoadingBlock from '@/components/LoadingBlock';
import { stateContainer } from '@/utils';
import { publicMethodsModel, publicMethodsAction } from '@/models/publicMethods';
import { publicMethodsState } from '@/models/publicMethods/index.d';
import { PUBLIC_METHODS } from '@/constant/namespace';

import { useActions } from 'gm-react-hanger';
import { useSelector } from 'react-redux';
import MENU, { RouteObj } from './menuConf';
import { LoggoBox, Content } from './style';
import HomeContent from './HomeContent';

stateContainer.injectModel(publicMethodsModel);

// 渲染 菜单项
function renderMenu(routes: Array<RouteObj>): React.ReactNode {
  return routes.map(item => {
    if (item.children && item.showChild) {
      return (
        <Menu.SubMenu key={item.key} title={item.name}>
          {renderMenu(item.children)}
        </Menu.SubMenu>
      );
    }
    return item.display !== false ? (
      <Menu.Item key={item.key}>
        {item.icon ? <Icon type={item.icon} /> : null}
        {item.name}
      </Menu.Item>
    ) : null;
  });
}

type Props = {};

function Home(props: Props & RouteComponentProps) {
  // 取得用户信息
  const { userInfo } = useSelector((state: publicMethodsState) => state[PUBLIC_METHODS]);
  // 是否已经登陆，用于控制是否渲染实际组件
  const hasLogined = Object.keys(userInfo).length !== 0;
  const { getUserInfo } = useActions(publicMethodsAction);
  // menu click 事件
  const clickMenu = ({ key }) => {
    const { history } = props;
    history.push(key);
  };

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  // 判断是否在iframe中，如果不在iframe中，则为开发环境，渲染菜单
  if (!judgeIframe) {
    return hasLogined ? <HomeContent /> : <LoadingBlock />;
  }
  return (
    <Layout>
      <IframeFindFocus />
      <Layout.Sider
        width={250}
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
      >
        <LoggoBox>{{ projectTitle }}</LoggoBox>
        <Menu mode="inline" theme="dark" onClick={clickMenu}>
          {renderMenu(MENU)}
        </Menu>
      </Layout.Sider>
      <Content className="print-loyout">{hasLogined ? <HomeContent /> : <LoadingBlock />}</Content>
    </Layout>
  );
}

export default Home;
