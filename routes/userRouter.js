const express = require('express')

const userController = require('../controllers/userController')

const userRouter = express.Router()

const { registration, login } = userController

userRouter.route('/registration').post(registration)
userRouter.route('/login').post(login)

module.exports = userRouter
