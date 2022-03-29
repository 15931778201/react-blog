'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  /**
     * 根据ID获取单个项目
     */
  // 查找所有文章
  async getAllArticle() {
    const { ctx } = this;
    try {
      const results = await ctx.model.Article.aggregate([
        {
          $lookup: {
            from: 'type',
            localField: 'type_id',
            foreignField: 'type_id',
            as: 'type',
          },
        },
      ]);
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }


  // 新建文章
  async createArticle(data) {
    const { ctx } = this;
    try {
      const results = new ctx.model.Article(data);
      return await results.save();
    } catch (err) {
      console.log('Service - add -Error ', err);
      ctx.body = JSON.stringify(err);
    }
  }

  // 修改文章
  async updateArticle(data) {
    const { ctx, app } = this;
    try {
      // { type_id: '1', title: 'aaa', content: 'bbb', introduce: 'ccc', addTime: '2022-01-26', view_count: 20 }
      const results = await ctx.model.Article.findOneAndUpdate({ _id: app.mongoose.Types.ObjectId(data._id) }, {
        $set: {
          title: data.title,
          content: data.content,
          add_time: new Date(),
        },
      }, { new: true });
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

  // 根据ID获取单个项目
  async getArticleById(id) {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.findOne({ _id: app.mongoose.Types.ObjectId(id) });

      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

  // 删除文章
  async deleteArticleById(id) {
    const { ctx, app } = this;
    try {
      // { type_id: '1', title: 'aaa', content: 'bbb', introduce: 'ccc', addTime: '2022-01-26', view_count: 20 }
      const results = await ctx.model.Article.findOneAndDelete({ _id: app.mongoose.Types.ObjectId(id) });
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }


  // 查找所有某类文章
  async getAllArticleByType(type_id) {
    const { ctx } = this;
    try {
      const results = await ctx.model.Article.aggregate([
        {
          $lookup: {
            from: 'type',
            localField: 'type_id',
            foreignField: 'type_id',
            as: 'type',
          },
        },
        {
          $match: {
            type_id,
          },
        },
      ]);
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

}
module.exports = ArticleService;
