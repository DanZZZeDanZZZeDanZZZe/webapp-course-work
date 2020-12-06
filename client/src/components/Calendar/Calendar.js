import React, { useEffect, useState } from 'react'
import { useMedia } from 'react-media'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyledCalendar,
  StyledCalendarHeaders,
  StyledCalendarDays,
} from '../../styles/components/Calendar'
import { mdSize } from '../../styles/screenBreakpoints'
import { getUserNotes } from '../../thunk-functions/calendarThunkFunctions'
import getArrOfDates from '../../utils/getArrOfDates'

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Calendar = () => {
  const isLessThanMd = useMedia({ query: `(max-width: ${mdSize})` })
  const dispatch = useDispatch()
  let notes = useSelector((state) => state.calendar.notes)

  const [dates, setDates] = useState(
    isLessThanMd ? getArrOfDates(null, 1) : getArrOfDates(null, 3)
  )

  useEffect(() => {
    dispatch(getUserNotes(dates[0], dates[dates.length - 1]))
  }, [])

  return (
    <StyledCalendar>
      <StyledCalendarHeaders>
        {WEEK.map((day) => (
          <div>{day}</div>
        ))}
      </StyledCalendarHeaders>
      <StyledCalendarDays>
        {dates.map((_) => (
          <div />
        ))}
      </StyledCalendarDays>
    </StyledCalendar>
  )
}

export default Calendar
