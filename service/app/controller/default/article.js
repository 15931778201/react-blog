'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {

  async index() {
    // 获取用户表的数据
    const { ctx } = this;
    const res = await ctx.service.article.getAllArticle();
    console.log(res);

    ctx.body = res; // 返回值显示
  }

  async create() {
    const { ctx } = this;
    // const data = { title: 'aaa', content: 'bbb', introduce: 'ccc', addTime: '2022-01-26', view_count: 20 };
    const res = await ctx.service.article.createArticle(ctx.request.body);
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
    const res = await ctx.service.article.updateArticle(ctx.request.body);
    console.log(res);
    ctx.body = {
      status: 200,
      data: res,
    };
    // res || '111'; // 返回值显示
  }

  async getDetail() {
    const { ctx } = this;
    const res = await ctx.service.article.getArticleById(ctx.params.id);
    console.log(res);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async delete() {
    const { ctx } = this;
    const res = await ctx.service.article.deleteArticleById(ctx.params.id);
    console.log(res);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async getAllArticleByType() {
    const { ctx } = this;
    console.log(ctx);
    const res = await ctx.service.article.getAllArticleByType(ctx.query.type_id);
    console.log(res);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async getArticleList() {

    const sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              'article.addTime as addTime,' +
              'article.view_count as view_count ,' +
              '.type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.Id';

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      data: results,
    };
  }
}

module.exports = ArticleController;
