const { handle } = require('../../utils');
const { MAIL_TO } = require('../../config/env');
const { transporter } = require('../../config/nodemailer');

exports.sendMail = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const contact = req.body.contact;
  const email = req.body.email;
  const message = req.body.message;

  const html =
    `<div><p>${message}</p>` +
    `<ul><li>firstName: ${firstName}</li>` +
    `<li>lastName: ${lastName}</li>` +
    `<li>contact: ${contact}</li>` +
    `<li>email: ${email}</li></ul></div>`;

  const [mailRes, err] = await handle(
    transporter.sendMail({
      from: `${firstName} ${lastName} <${email}>`,
      to: MAIL_TO,
      replyTo: email,
      subject: 'Enquiry',
      html: html,
    })
  );

  if (err)
    return res.json({
      success: false,
      err: [
        {
          location: 'nodemailer',
          msg: 'Email failed. Please try again',
          param: 'general',
          value: '',
        },
      ],
    });

  res.json({
    success: true,
    data: {
      firstName,
      lastName,
      contact,
      email,
      message,
    },
  });
};
