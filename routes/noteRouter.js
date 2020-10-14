const express = require('express')

const noteValidations = require('../validations/noteValidations')
const { auth } = require('../middlewares/authMiddleware')
const noteController = require('../controllers/noteController')

const { createNoteValidation } = noteValidations
const { getNotes, сerateNote } = noteController

const noteRouter = express.Router()

noteRouter
  .route('/')
  .get(auth, getNotes)
  .post(auth, createNoteValidation, сerateNote)

module.exports = noteRouter
