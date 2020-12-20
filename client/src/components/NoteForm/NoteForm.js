import React from 'react'
import { useForm } from 'react-hook-form'

import StyledMainForm from '../../styles/components/MainForm'

const NoteForm = ({ title, onSubmit, note, children }) => {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <h2>{title}</h2>
      <StyledMainForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input
            name="title"
            type="title"
            placeholder="Title"
            ref={register}
            defaultValue={note && note.title}
          />
        </label>
        <label>
          Text:
          <textarea
            name="text"
            placeholder="Text"
            ref={register}
            defaultValue={note && note.text}
          />
        </label>
        <label>
          Time:
          <input
            name="time"
            type="time"
            ref={register}
            defaultValue={note && note.time}
          />
        </label>
        {children}
      </StyledMainForm>
    </>
  )
}

export default NoteForm
