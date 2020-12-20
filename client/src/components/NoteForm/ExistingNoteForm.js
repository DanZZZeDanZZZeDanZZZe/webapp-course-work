import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  changeNote,
  deleteNote,
} from '../../thunk-functions/calendarThunkFunctions'
import NoteForm from './NoteForm'

const ExistingNoteForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { currentNote } = useSelector((state) => state.calendar)

  const onSubmit = (data) => {
    dispatch(changeNote(data))
    history.push('/calendar')
  }

  const onDelete = () => {
    dispatch(deleteNote())
    history.push('/calendar')
  }

  return (
    <NoteForm title="Note" onSubmit={onSubmit} note={currentNote}>
      <button>Save</button>
      <button type="button" onClick={() => onDelete()}>
        Delete
      </button>
    </NoteForm>
  )
}
export default ExistingNoteForm
