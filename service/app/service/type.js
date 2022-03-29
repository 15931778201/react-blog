'use strict';

const Service = require('egg').Service;

class TypeService extends Service {
  /**
     * 根据ID获取单个项目
     */
  // 查找所有文章
  async getAllType() {
    const { ctx } = this;
    try {
      const results = await ctx.model.Type.find({});
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }


  // 新建文章
  async createType(data) {
    const { ctx } = this;
    try {
      const results = new ctx.model.Type(data);
      return await results.save();
    } catch (err) {
      console.log('Service - add -Error ', err);
      ctx.body = JSON.stringify(err);
    }
  }

  // 修改文章
  async updateType(data) {
    const { ctx, app } = this;
    try {
      // { type_id: '1', title: 'aaa', content: 'bbb', introduce: 'ccc', addTime: '2022-01-26', view_count: 20 }
      const results = await ctx.model.Type.findOneAndUpdate({ _id: app.mongoose.Types.ObjectId(data._id) }, {
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
  async getTypeById(id) {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Type.findOne({ _id: app.mongoose.Types.ObjectId(id) });

      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }

  // 删除文章
  async deleteTypeById(id) {
    const { ctx, app } = this;
    try {
      // { type_id: '1', title: 'aaa', content: 'bbb', introduce: 'ccc', addTime: '2022-01-26', view_count: 20 }
      const results = await ctx.model.Type.findOneAndDelete({ _id: app.mongoose.Types.ObjectId(id) });
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}
module.exports = TypeService;
