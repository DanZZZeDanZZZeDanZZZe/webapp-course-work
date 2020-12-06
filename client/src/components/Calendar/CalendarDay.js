import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledCalendarDay } from '../../styles/components/Calendar'

const CalendarDay = ({ date }) => {
  const dispatch = useDispatch()
  const noteSelector = useSelector((state) => state.calendar.notes)

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
    </StyledCalendarDay>
  )
}

export default CalendarDay
