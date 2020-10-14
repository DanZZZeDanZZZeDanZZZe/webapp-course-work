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

//const { id } = req.params
//   const note = notes.find((el) => el.id === id);
