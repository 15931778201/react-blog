'use strict';

const Controller = require('egg').Controller;

class TypeController extends Controller {

  async index() {
    // 获取用户表的数据
    const { ctx } = this;
    const res = await ctx.service.type.getAllType();
    console.log(res);

    ctx.body = res; // 返回值显示
  }

  async create() {
    const { ctx } = this;
    const res = await ctx.service.type.createType(ctx.request.body);
    console.log(res);
    ctx.body = {
      status: 200,
      data: res,
    };
    // res || '111'; // 返回值显示
  }

  async update() {
    const { ctx } = this;
    console.log('ctx.request.body', ctx.request.body);
    // const data = { title: 'aaa', content: 'bbb', introduce: 'ccc', addTime: '2022-01-26', view_count: 20 };
    const res = await ctx.service.type.updateType(ctx.request.body);
    console.log(res);
    ctx.body = {
      status: 200,
      data: res,
    };
    // res || '111'; // 返回值显示
  }

  async getDetail() {
    const { ctx } = this;
    const res = await ctx.service.type.getTypeById(ctx.params.id);
    console.log(res);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async delete() {
    const { ctx } = this;
    const res = await ctx.service.type.deleteTypeById(ctx.params.id);
    console.log(res);
    ctx.body = {
      status: 200,
      data: res,
    };
  }
}

module.exports = TypeController;
