const { NODE_ENV } = require('../config/env');
const path = require('path');

exports.clientController = (req, res) => {
  if (NODE_ENV !== 'production')
    return res.redirect('http://localhost:3000' + req.originalUrl);

  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
};
