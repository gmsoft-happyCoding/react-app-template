// type Opt = {
//   /** 应用部署的域名（不要携带尾部斜线） */
//   domain: string;
//   /** 政府采购网域名（不要携带尾部斜线） */
//   zcjDomain: string;
//   /** 行采家域名（不要携带尾部斜线） */
//   xcjDomain: string;
//   /** cdn域名（不要携带尾部斜线） */
//   cdnDomain: string;
//   /** 组件注册服务地址 */
//   registriesServer: string;
//   /** 应部署的子路径，如果项目独立部署，占据主域名，则填入空字符串即可 */
//   publickDir: string;
// };
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DeployType = require('./deploy-type');

const getBaseParams = opt => {
  const { domain, zcjDomain, xcjDomain, cdnDomain, registriesServer, publickDir } = opt;

  return {
    REACT_APP_GENERATE_SOURCEMAP: true,
    REACT_APP_DEPLOY_TYPE: DeployType.SCP,
    // ====================== 项目配置 ======================
    REACT_APP_DOMAIN: domain,
    // 应用部署的域名和子路径
    REACT_APP_PUBLIC_URL: `//${domain}/${publickDir}`,
    // CDN服务器地址
    REACT_APP_CDN_SERVER: `//${cdnDomain}`,
    // 组件注册服务器
    REACT_APP_COMPONENT_REGISTRY_SERVER: `//${registriesServer}`,

    // ====================== 网关配置 ======================
    // 私有网关
    REACT_APP_PRIVATE_GATEWAY: `//${domain}/private-gateway`,
    // 大家采网关特别说明：政府采购以及内网调用政府采购与内网domain, 行采家则使用大家采domain作为大家采网关的调用Host
    REACT_APP_DJC_GATEWAY: `//${domain}/djc-gateway`,
    // 政采网关
    REACT_APP_GWEBSITE: `//${zcjDomain}/gwebsite`,
    // 业务网关
    REACT_APP_YW_GATEWAY: `//${zcjDomain}/yw-gateway`,
    // 行采家网关
    REACT_APP_XCJ_GATEWAY: `//${xcjDomain}/xcj-gateway`,

    // ====================== 业务配置 ======================
    // 项目内通用的业务配置请在此处编写
  };
};

module.exports = getBaseParams;
