const express = require('express');
const ApiRouter = express.Router();

ApiRouter.get('/', (req, res) => {
  res.json({ route: 'api' });
});

module.exports = ApiRouter;
