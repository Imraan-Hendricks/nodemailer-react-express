const path = require('path');

module.exports = (app) => {
  app.use('/api', require('./api'));
  app.get('*', (req, res) => {
    if (process.env.NODE_ENV !== 'production')
      return res.redirect('http://localhost:3000' + req.originalUrl);

    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
};
