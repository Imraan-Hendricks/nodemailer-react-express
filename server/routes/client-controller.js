const { NODE_ENV } = require('../config/env');
const { relativeDir } = require('../utils');

exports.clientController = (req, res) => {
  if (NODE_ENV !== 'production')
    return res.redirect('http://localhost:3000' + req.originalUrl);

  res.sendFile(relativeDir('../../client/build/index.html'));
};
