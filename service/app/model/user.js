'use strict';

module.exports = app => {
  const { mongoose } = app;

  return mongoose.model(
    'User',
    new mongoose.Schema({
      user_name: { type: String },
      password: { type: String },
      age: { type: Number },
      description: { type: String },
      status: { type: Number },
    }),
    'user'
  );
};
