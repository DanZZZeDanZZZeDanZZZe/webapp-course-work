import { SET_NEW_CURRENT_NOTE, SET_NOTES } from '../actions/calendarActions'

const initialState = {
  notes: null,
  newNote: false,
  currentNote: null,
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
    case SET_NEW_CURRENT_NOTE:
      return {
        ...state,
        newNote: true,
        currentNote: {
          date: action.payload,
        },
      }
    default:
      return state
  }
}
