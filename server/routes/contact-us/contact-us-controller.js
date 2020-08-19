const { check, handleErrors } = require('./contact-us-validation');
const { sendMail } = require('./contact-us-send-mail');

exports.check = check;
exports.handleErrors = handleErrors;
exports.sendMail = sendMail;
