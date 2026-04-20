const loginController = require('../Controller/login');

module.exports = (app) => {
  app.post('/api/login', loginController.login);
};
