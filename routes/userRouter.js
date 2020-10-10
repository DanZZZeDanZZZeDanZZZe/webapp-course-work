const express = require('express')

const userValidationMiddlewares = require('../middlewares/userValidationMiddlewares')
const userController = require('../controllers/userController')

const userRouter = express.Router()

const { registration, login } = userController
const { registrationValidations, loginValidations } = userValidationMiddlewares

userRouter.route('/registration').post(registrationValidations, registration)
userRouter.route('/login').post(loginValidations, login)

module.exports = userRouter
