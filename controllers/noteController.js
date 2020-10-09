exports.getAllNotes = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'getAllRoutes is undefined',
  })
}

exports.getNote = (req, res) => {
  const { id } = req.params
  //   const note = notes.find((el) => el.id === id);

  res.status(500).json({
    status: 'error',
    message: `getAllRoutes ${id} is undefined`,
  })
}
