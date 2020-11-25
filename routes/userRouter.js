const express = require('express')

const userValidations = require('../validations/userValidations')
const userController = require('../controllers/userController')

const userRouter = express.Router()

const { registration, login } = userController
const { registrationValidation, loginValidation } = userValidations

userRouter.route('/registration').post(registrationValidation, registration)
userRouter.route('/login').post(loginValidation, login)

module.exports = userRouter
