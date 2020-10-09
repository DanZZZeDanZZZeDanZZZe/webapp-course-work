const express = require('express')

const noteController = require('../controllers/noteController')

const { getAllNotes } = noteController

const noteRouter = express.Router()

noteRouter.route('/').get(getAllNotes)

module.exports = noteRouter
