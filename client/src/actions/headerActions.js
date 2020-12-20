export const SET_ACTIVITY = 'SET_ACTIVITY'

export function setActivity(activity) {
  return {
    type: 'SET_ACTIVITY',
    payload: activity,
  }
}
