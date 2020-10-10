const { check, validationResult } = require('express-validator')

const checkEmail = () => check('email').trim().normalizeEmail().isEmail()
const checkPassword = () => check('password').trim().isLength({ min: 10 })
const createHandleResults = (message) => {
  return (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      console.log(message)
      return res.status(400).json({
        errors: errors.array(),
        message,
      })
    }
    next()
  }
}

exports.registrationValidations = [
  checkEmail(),
  checkPassword(),
  createHandleResults('Incorrect registration data'),
]

exports.loginValidations = [
  checkEmail(),
  checkPassword(),
  //createHandleResults('Incorrect login data'),
]
