const { check } = require('express-validator')

const { createHandleResults } = require('./utils/createHandleResults')

const checkTitle = () => check('title').trim().isLength({ min: 1, max: 50 })
const checkText = () => check('text').trim().isLength({ min: 1, max: 300 })
const checkDate = () =>
  check('date')
    .trim()
    .customSanitizer((value) => new Date(Date.parse(value)))

exports.createNoteValidation = [
  checkTitle(),
  checkDate(),
  checkText(),
  createHandleResults('Incorrect data'),
]

exports.createOptionalNoteValidation = [
  checkTitle().optional(),
  checkDate().optional(),
  checkText().optional(),
  createHandleResults('Incorrect data'),
]
