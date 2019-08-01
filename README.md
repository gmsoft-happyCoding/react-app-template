这项目使用 [stormrage](https://github.com/gmsoft-happyCoding/stormrage) 初始化

## 可用的脚本

在此目录中你可以使用以下脚本:

### `yarn start`

启动项目开发调试, 默认端口 3000

### `yarn test`

启动项目单元测试

### `yarn run docz`

启动项目 docz 开发调试, 默认端口 3000

docz 是什么? 详见: https://www.docz.site/documentation

### `yarn run bad`

编译&发布(build and deploy) app 项目

```
REACT_APP_DEPLOY_TYPE
有效值: zip | scp

zip: 生成用于发布的文件
scp: 上传到发布目标服务器
```

```
REACT_APP_DEPLOY_MACHINES
接受一组发布目标服务器信息设置包括
machine 和 where 必须配置, see: https://192.168.2.10:8080/svn/GovProEleTrade/安装与配置/部署配置/发布配置

示例:
[{
    "machine": "machine1",
    "where": [{ "rootKey": "nginx.websrc", "path": "deploy-test"}]
}]

其他可选的配置:
privateKey - 私钥文件path
passphrase - 私钥密码
password - 服务器登录密码

发布服务器可以通过 privateKey + passphrase 登录
也可以通过 password 登录
```

> 发布信息可以不配置或者部分配置, 执行命令后未配置的信息可通过命令行交互填写

### `yarn genapi`

生成 `api` 代码

---

## 路径别名

@ -> src

> 如果相对路径较长例如 ../../components/\* 可以改写为 @/components/\*

如果你想要定义自己的路径别名, 请修改一下文件

```
1. /config/webpack.config.dev.js
2. /config/webpack.config.prod.js
3. /tsconfig.json
4. /doczrc.js
5. /jest.config.js
```

## 其他

`npx jest --clearCache`

清除 jest 缓存
