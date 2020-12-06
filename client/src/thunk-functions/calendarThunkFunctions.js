import { setNotes } from '../actions/calendarActions'

const getUserNotes = (start, end) => async (dispatch, getState) => {
  const getStr = (date) => {
    const { day, year, month } = date
    return `${day}.${month}.${year}`
  }

  const { token } = getState().user
  const headers = new Headers()
  headers.set('Authorization', `Bearer ${token}`)
  try {
    const response = await fetch(
      `/api/notes/list?=${getStr(start)}:${getStr(end)}`,
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

export { getUserNotes }
