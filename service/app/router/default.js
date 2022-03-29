'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.article.index);
  router.post('/default/article', controller.default.article.create);
  router.put('/default/article', controller.default.article.update);
  router.get('/default/article/:id', controller.default.article.getDetail);
  router.delete('/default/article/:id', controller.default.article.delete);
  router.get('/default/articletype', controller.default.article.getAllArticleByType);
  router.get('/default/type/index', controller.default.type.index);
  router.post('/default/type', controller.default.type.create);
  router.put('/default/type', controller.default.type.update);
  router.get('/default/type/:id', controller.default.type.getDetail);
  router.delete('/default/type/:id', controller.default.type.delete);
};
