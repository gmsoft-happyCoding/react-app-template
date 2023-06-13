'use strict';

const fs = require('fs');
const path = require('path');
const paths = require('./paths');

delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV || 'development';

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);

// 新的过滤规则
const ENV_PATTERN = new RegExp(process.env.GMSOFT_ENV_FILTER);

function getClientEnvironment(publicUrl) {
  const raw = Object.keys(process.env)
    // 修改了此处的过滤规则
    .filter(key => ENV_PATTERN.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV,
        // 修改了此处的默认部署位置的引用方式
        PUBLIC_URL: publicUrl || process.env['business.public-url'],
      }
    );
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };

  return { raw, stringified };
}

module.exports = getClientEnvironment;
