'use strict';

module.exports = app => {
  const { mongoose } = app;

  return mongoose.model(
    'Type',
    new mongoose.Schema({
      type_id: { type: String, unique: true },
      type_name: { type: String },
      order_num: { type: Number },
    }),
    'type'
  );
};
