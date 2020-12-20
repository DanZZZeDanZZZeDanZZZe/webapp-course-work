import React from 'react'
import { useSelector } from 'react-redux'
import ExistingNoteForm from '../components/NoteForm/ExistingNoteForm'
import NewNoteForm from '../components/NoteForm/NewNoteForm'
import StyledCenteredMain from '../styles/components/CenteredMain'

const NotePage = () => {
  const { newNote } = useSelector((state) => state.calendar)

  return (
    <StyledCenteredMain>
      {newNote ? <NewNoteForm /> : <ExistingNoteForm />}
    </StyledCenteredMain>
  )
}
export default NotePage
