'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {

  async login() {
    // 首页的文章列表数据
    const { ctx } = this;
    const res = await ctx.service.main.checkLogin();
    console.log(res);

    ctx.body = res; // 返回值显示
  }

  // 后台文章分类信息
  async getTypeInfo() {
    const { ctx } = this;
    const resType = await ctx.model.type.findOne({ type_id: ctx.query.type_id });
    this.ctx.body = { data: resType };
  }

}

module.exports = MainController;
