import { setNotes } from '../actions/calendarActions'
import getDateFromStr from '../utils/getDateFromStr'
import getDateStr from '../utils/getDateStr'

const getUserNotes = (start, end) => async (dispatch, getState) => {
  const { token } = getState().user
  const headers = new Headers()
  headers.set('Authorization', `Bearer ${token}`)
  try {
    const response = await fetch(
      `/api/notes/list?period=${getDateStr(start)}:${getDateStr(end)}`,
      {
        headers,
      }
    )
    if (!response.ok) {
      throw new Error(response.message || 'Something went wrong')
    }
    const notes = await response.json()
    dispatch(setNotes(notes))
  } catch ({ message }) {
    alert(message)
  }
}

const createNewNote = ({ title, text, time }) => async (dispatch, getState) => {
  const { user, calendar } = getState()
  const date = calendar.currentNote.date
  const headers = new Headers()
  headers.set('Authorization', `Bearer ${user.token}`)
  headers.set('Content-Type', 'application/json')

  try {
    const response = await fetch(`/api/notes`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ date: getDateFromStr(date, time), text, title }),
    })
    if (!response.ok) {
      throw new Error(response.message || 'Something went wrong')
    }
  } catch ({ message }) {
    alert(message)
  }
}

const deleteNote = () => async (dispatch, getState) => {
  const { user, calendar } = getState()
  const id = calendar.currentNote.id
  const headers = new Headers()
  headers.set('Authorization', `Bearer ${user.token}`)

  try {
    const response = await fetch(`/api/notes/${id}`, {
      method: 'DELETE',
      headers,
    })
    if (!response.ok) {
      throw new Error(response.message || 'Something went wrong')
    }
  } catch ({ message }) {
    alert(message)
  }
}

export { getUserNotes, createNewNote, deleteNote }
