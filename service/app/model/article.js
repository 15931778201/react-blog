'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  console.log('123');

  // 下面得操作是连接数据库
  const ArticleSchema = new Schema({
    // 修改和新增用到，规定字段得类型和其他条件等
    type_id: {
      type: Schema.ObjectId,
      ref: 'Type',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    introduce: {
      type: String,
    },
    add_time: {
      type: Date,
      default: new Date(),
    },
    view_count: {
      type: Number,
    },
  }, { versionKey: false });

  return mongoose.model('Article', ArticleSchema, 'article'); // 我的理解：Article是指定查找的入口，随便取；ArticleSchema是参数；article是你数据集合表的名称
};
