export const SET_NOTES = 'SET_NOTES'
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE'
export const SET_NEW_CURRENT_NOTE = 'SET_NEW_CURRENT_NOTE'
export const SET_CALENDAR_RELEVANCE = 'SET_CALENDAR_RELEVANCE'

export function setNotes(notes) {
  return {
    type: 'SET_NOTES',
    payload: notes,
  }
}

export function setCurrentNote(id) {
  return {
    type: 'SET_CURRENT_NOTE',
    payload: id,
  }
}

export function setNewCurrentNote(date) {
  return {
    type: 'SET_NEW_CURRENT_NOTE',
    payload: date,
  }
}

export function setCalendarRelevance(desuetude) {
  return {
    type: 'SET_CALENDAR_RELEVANCE',
    payload: desuetude,
  }
}
