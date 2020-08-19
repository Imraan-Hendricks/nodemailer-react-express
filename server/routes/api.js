const express = require('express');
const ApiRouter = express.Router();
const contactUsController = require('./contact-us/contact-us-controller');

ApiRouter.post(
  '/contactUs',
  contactUsController.check,
  contactUsController.handleErrors,
  contactUsController.sendMail
);

module.exports = ApiRouter;
