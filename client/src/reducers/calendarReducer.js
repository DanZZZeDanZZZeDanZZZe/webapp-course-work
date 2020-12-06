import { SET_NOTES } from '../actions/calendarActions'

const initialState = {
  notes: null,
}

export function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTES:
      return {
        ...state,
        notes: action.payload.map((note) => ({
          ...note,
          date: new Date(note.date),
          id: note._id,
        })),
      }
    default:
      return state
  }
}
