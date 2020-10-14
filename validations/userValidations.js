const { check } = require('express-validator')

const { createHandleResults } = require('./utils/createHandleResults')

const checkEmail = () => check('email').trim().normalizeEmail().isEmail()
const checkPassword = () =>
  check('password').trim().isLength({ min: 10, max: 50 })

exports.registrationValidation = [
  checkEmail(),
  checkPassword(),
  createHandleResults('Incorrect registration data'),
]

exports.loginValidation = [
  checkEmail(),
  checkPassword(),
  createHandleResults('Incorrect login data'),
]
