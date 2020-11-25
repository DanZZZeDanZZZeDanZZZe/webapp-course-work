const express = require('express')

const noteValidations = require('../validations/noteValidations')
const { auth } = require('../middlewares/authMiddleware')
const noteController = require('../controllers/noteController')

const { createNoteValidation, createOptionalNoteValidation } = noteValidations
const { getNotes, getNote, сerateNote, deleteNote, changeNote } = noteController

const noteRouter = express.Router()

noteRouter.route('/').post(auth, createNoteValidation, сerateNote)

noteRouter.route('/list').get(auth, getNotes)

noteRouter
  .route('/:id')
  .get(auth, getNote)
  .delete(auth, deleteNote)
  .put(auth, createOptionalNoteValidation, changeNote)
module.exports = noteRouter
