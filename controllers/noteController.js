const Note = require('../models/Note')

exports.сerateNote = async (req, res) => {
  try {
    const { userId } = req.user
    const { title, text, date } = req.body

    let noteParams = { title, date, owner: userId }
    if (text) noteParams = { ...noteParams, text }

    const note = new Note(noteParams)
    await note.save()

    res.status(201).json({ note })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Something went wrong. Try it again!' })
  }
}

exports.getNotes = async (req, res) => {
  try {
    const { userId } = req.user
    const notes = await Note.find({ owner: userId })
    res.status(200).json(notes)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Something went wrong. Try it again!' })
  }
}

exports.getNote = async (req, res) => {
  try {
    const { id } = req.params
    const note = await Note.findById(id)
    res.status(200).json(note)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Something went wrong. Try it again!' })
  }
}

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params
    await Note.findByIdAndDelete(id)

    res.status(200).json({ message: 'Successful deletion' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Something went wrong. Try it again!' })
  }
}

exports.changeNote = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) throw new Error('Request does not contain ID')

    const oldNote = await Note.findById(id)

    const { title, text, date } = req.body
    const { owner } = oldNote

    const newNote = new Note({
      title: title || oldNote.title,
      text: text || oldNote.text,
      date: date || oldNote.date,
      owner,
    })

    await newNote.validate()
    await Note.deleteOne({ _id: oldNote.id })
    await newNote.save()

    res.status(201).json({ newNote })
  } catch (e) {
    console.log(e)
    const message = e.message || 'Something went wrong. Try it again!'
    res.status(500).json({ message })
  }
}
