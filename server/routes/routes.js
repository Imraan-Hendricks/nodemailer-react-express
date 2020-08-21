const { ApiRouter } = require('./api');
const { clientController } = require('./client-controller');

exports.routes = (app) => {
  app.use('/api', ApiRouter);
  app.get('*', clientController);
};
