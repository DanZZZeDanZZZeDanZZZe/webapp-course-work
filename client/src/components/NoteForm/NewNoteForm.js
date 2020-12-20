import React from 'react'
import NoteForm from './NoteForm'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNewNote } from '../../thunk-functions/calendarThunkFunctions'

const NewNoteForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = (data) => {
    history.push('/calendar')
    dispatch(createNewNote(data))
  }

  return (
    <NoteForm title="New note" onSubmit={onSubmit}>
      <button>Create</button>
    </NoteForm>
  )
}
export default NewNoteForm
