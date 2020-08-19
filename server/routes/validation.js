const { check, validationResult } = require('express-validator');

const firstName = () =>
  check('firstName')
    .not()
    .isEmpty()
    .withMessage('first name required')
    .bail()
    .matches(/^[a-z ,.'-]+$/i)
    .withMessage(
      'may only include letters, spaces, commas, periods, apostrophes and hyphens'
    )
    .bail()
    .isLength({ min: 2, max: 20 })
    .withMessage('must be between 2 and 20 characters');

const lastName = () =>
  check('lastName')
    .not()
    .isEmpty()
    .withMessage('last name required')
    .bail()
    .matches(/^[a-z ,.'-]+$/i)
    .withMessage(
      'may only include letters, spaces, commas, periods, apostrophes and hyphens'
    )
    .bail()
    .isLength({ min: 2, max: 20 })
    .withMessage('must be between 2 and 20 characters');

const contact = () =>
  check('contact')
    .not()
    .isEmpty()
    .withMessage('contact number required')
    .bail()
    .matches(/^[0-9]+$/)
    .withMessage('may only contain digits')
    .bail()
    .isLength({ min: 10, max: 10 })
    .withMessage('must be 10 digits');

const email = () =>
  check('email')
    .not()
    .isEmpty()
    .withMessage('email required')
    .bail()
    .isEmail()
    .withMessage('invalid email address')
    .bail()
    .isLength({ min: 5, max: 50 })
    .withMessage('must be between 5 and 50 characters');

const message = () =>
  check('message')
    .not()
    .isEmpty()
    .withMessage('message required')
    .bail()
    .matches(/^[0-9a-z ,.'-]+$/i)
    .withMessage(
      'may only include letters, digits, spaces, commas, periods, apostrophes and hyphens'
    )
    .bail()
    .isLength({ min: 2, max: 800 })
    .withMessage('must be between 2 and 800 characters');

exports.check = [firstName(), lastName(), contact(), email(), message()];

exports.errors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.json({ success: false, err: errors.array() });

  next();
};
