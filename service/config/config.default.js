/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634403848143_5458';

  // add your middleware config here
  config.middleware = [];

  /** @type Egg.EggPlugin */

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    cluster: {
      listen: {
        path: '',
        port: 7002,
        hostname: '',
      },
    },
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/my-blog',
        options: {
          useNewUrlParser: true,
          // useFindAndModify: false,
          useUnifiedTopology: true,
          useCreateIndex: true,
        },
      },
    },
    view: {
      root: [
        path.join(appInfo.baseDir, 'app/view'),
        // path.join(appInfo.baseDir, 'path/to/another')// 其他的模板地址
      ].join(','),
      mapping: {
        '.ejs': 'ejs', // .nj 结尾的文件，使用 nunjucks引擎
      },
      defaultViewEngine: 'ejs', // 默认使用nunjucks
    },
    logger: {
      level: 'DEBUG',
      consoleLevel: 'DEBUG',
    },
    security: {
      csrf: {
        enable: false,
      },
      domainWhiteList: [ '*' ],
    },
    cors: {
      origin: 'http://localhost:3000', // 只允许这个域进行访问接口
      credentials: true, // 开启认证
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
