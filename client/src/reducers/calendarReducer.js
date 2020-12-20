import {
  SET_CURRENT_NOTE,
  SET_NEW_CURRENT_NOTE,
  SET_NOTES,
  SET_CALENDAR_RELEVANCE,
} from '../actions/calendarActions'

const initialState = {
  notes: null,
  newNote: false,
  currentNote: null,
  desuetude: false,
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
    case SET_CURRENT_NOTE:
      return {
        ...state,
        newNote: false,
        currentNote: state.notes.find((note) => note.id === action.payload),
      }
    case SET_NEW_CURRENT_NOTE:
      return {
        ...state,
        newNote: true,
        currentNote: {
          date: action.payload,
        },
      }
    case SET_CALENDAR_RELEVANCE:
      return {
        ...state,
        desuetude: action.payload,
      }
    default:
      return state
  }
}
