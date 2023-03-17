/* eslint-disable @typescript-eslint/no-require-imports */
const DeployType = require('./common/deploy-type');

const domain = 'gec123.com';

module.exports = {
  envs: {
    // 应用部署的域名和子路径
    REACT_APP_PUBLIC_URL: `//www.${domain}/{{projectName}}`,
    // CDN服务器地址
    REACT_APP_CDN_SERVER: `//cdn.${domain}`,
    // 组件注册服务器
    REACT_APP_COMPONENT_REGISTRY_SERVER: `//registry.${domain}`,
    // 基础服务网关
    REACT_APP_DJC_GATEWAY_BASE: `//www.${domain}/djc-gateway`,
    // 发布部署, 建议配置不然每次都需要交互设置
    REACT_APP_DEPLOY_TYPE: DeployType.ZIP,
    /**
     * machine 和 where 必须配置
     * see: https://192.168.2.10:8080/svn/GovProEleTrade/安装与配置/部署配置/发布配置 or your .deployrc config info
     */
    REACT_APP_DEPLOY_MACHINES: [
      { machine: 'machine1', where: [{ rootKey: 'nginx.websrc', path: '{{projectName}}' }] },
      { machine: 'machine2', where: [{ rootKey: 'nginx.websrc', path: '{{projectName}}' }] },
    ],
  },
};
