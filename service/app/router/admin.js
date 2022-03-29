'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.post('/admin/login', controller.admin.main.login);
  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
  router.post('/admin/article', controller.default.article.create);
  router.put('/admin/article', controller.default.article.update);
  router.get('/admin/article/page', controller.default.article.index);
  router.get('/admin/article/:id', controller.default.article.getDetail);
  router.delete('/admin/article/:id', controller.default.article.delete);

};
