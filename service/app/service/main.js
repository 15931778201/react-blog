'use strict';

const Service = require('egg').Service;

class MainService extends Service {
  // 判断用户名密码是否正确
  async checkLogin() {
    const { ctx } = this;
    const user_name = ctx.request.body.user_name;
    const password = ctx.request.body.password;
    try {
      const results = await ctx.model.User.findOne({ user_name, password });
      if (results) {
        // 登录成功,进行session缓存
        const openId = new Date().getTime();
        ctx.session.openId = { openId };
        ctx.body = { data: '登录成功', openId };

      } else {
        ctx.body = { data: '登录失败' };
      }
      return ctx.body;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}
module.exports = MainService;
