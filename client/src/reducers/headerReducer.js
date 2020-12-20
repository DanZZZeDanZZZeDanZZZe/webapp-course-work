import { SET_ACTIVITY } from '../actions/headerActions'

const initialState = {
  activity: false,
}

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      }

    default:
      return state
  }
}
