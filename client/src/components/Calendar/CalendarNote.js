import { StyledCalendarNote } from '../../styles/components/Calendar'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentNote } from '../../actions/calendarActions'

const CalendarNote = ({ children }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { time, title, id } = children
  const onClikHandler = () => {
    dispatch(setCurrentNote(id))
    history.push('/note')
  }

  return (
    <StyledCalendarNote onClick={onClikHandler}>
      <span>{time}</span>
      <span>{title}</span>
    </StyledCalendarNote>
  )
}
export default CalendarNote
