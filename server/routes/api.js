const express = require('express');
const ApiRouter = express.Router();
const { handle } = require('../utils');
const { MAIL_TO } = require('../config/env');
const transporter = require('../config/transporter');

ApiRouter.post('/contactUs', async (req, res) => {
  const html = `<div><p>${req.body.message}</p><ul><li>firstName: ${req.body.firstName}</li><li>lastName: ${req.body.lastName}</li><li>contact: ${req.body.contact}</li><li>email: ${req.body.email}</li></ul></div>`;

  const mailOptions = {
    from: `${req.body.firstName} ${req.body.lastName} <${req.body.email}>`,
    to: MAIL_TO,
    replyTo: req.body.email,
    subject: 'Enquiry',
    html: html,
  };

  const [mailRes, err] = await handle(transporter.sendMail(mailOptions));

  if (err) {
    const err = [
      {
        location: 'nodemailer',
        msg: 'Email failed. Please try again',
        param: 'general',
        value: '',
      },
    ];
    return res.json({ success: false, err });
  }

  res.json({
    success: true,
    data: {
      ...mailOptions,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      from: req.body.email,
      message: req.body.message,
    },
  });
});

module.exports = ApiRouter;
