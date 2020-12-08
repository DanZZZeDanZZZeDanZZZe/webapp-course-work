import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import StyledMainForm from '../../styles/components/MainForm'
import { createNewNote } from '../../thunk-functions/calendarThunkFunctions'

const NoteForm = () => {
  const {
    newNote,
    currentNote: { date },
  } = useSelector((state) => state.calendar)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = (data) => {
    history.push('/calendar')
    newNote && dispatch(createNewNote(data))
  }

  return (
    <>
      <h2>{newNote && 'New note'}</h2>
      <StyledMainForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input name="title" type="title" placeholder="Title" ref={register} />
        </label>
        <label>
          Text:
          <textarea name="text" placeholder="Text" ref={register} />
        </label>
        <label>
          Time:
          <input name="time" type="time" ref={register} />
        </label>
        <button>Create</button>
      </StyledMainForm>
    </>
  )
}

export default NoteForm
