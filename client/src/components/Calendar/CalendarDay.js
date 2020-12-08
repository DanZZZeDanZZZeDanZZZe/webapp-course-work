import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { setNewCurrentNote } from '../../actions/calendarActions'
import { StyledCalendarDay } from '../../styles/components/Calendar'
import getDateStr from '../../utils/getDateStr'

const CalendarDay = ({ date }) => {
  const dispatch = useDispatch()
  const noteSelector = useSelector((state) => state.calendar.notes)
  const history = useHistory()

  const buttonClickHandler = () => {
    history.push('/note')
    dispatch(setNewCurrentNote(getDateStr(date)))
  }

  return (
    <StyledCalendarDay>
      <p>{date.day}</p>
      {noteSelector &&
        noteSelector
          .filter((note) => date.day === note.date.getDate())
          .map((note) => {
            note.time = `${note.date.getHours()}:${note.date.getMinutes()}`
            return note
          })
          .map((note, index) => (
            <div key={index}>
              <span>{note.time}</span>
              <span>{note.text}</span>
            </div>
          ))}
      <button onClick={() => buttonClickHandler()}>Add</button>
    </StyledCalendarDay>
  )
}

export default CalendarDay
