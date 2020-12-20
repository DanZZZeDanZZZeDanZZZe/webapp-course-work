import React, { useEffect, useState } from 'react'
import { useMedia } from 'react-media'
import { useDispatch, useSelector } from 'react-redux'
import { setCalendarRelevance } from '../../actions/calendarActions'
import {
  StyledCalendar,
  StyledCalendarHeaders,
  StyledCalendarDays,
} from '../../styles/components/Calendar'
import { mdSize } from '../../styles/screenBreakpoints'
import { getUserNotes } from '../../thunk-functions/calendarThunkFunctions'
import getArrOfDates from '../../utils/getArrOfDates'
import CalendarDay from './CalendarDay'

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Calendar = () => {
  const isLessThanMd = useMedia({ query: `(max-width: ${mdSize})` })
  const dispatch = useDispatch()
  const desuetude = useSelector((state) => state.calendar.desuetude)

  const [dates, setDates] = useState(
    isLessThanMd ? getArrOfDates(null, 1) : getArrOfDates(null, 3)
  )

  useEffect(() => {
    if (desuetude) {
      dispatch(getUserNotes(dates[0], dates[dates.length - 1]))
      dispatch(setCalendarRelevance(false))
    }
  }, [desuetude, dates, dispatch])

  return (
    <StyledCalendar>
      <StyledCalendarHeaders>
        {WEEK.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </StyledCalendarHeaders>
      <StyledCalendarDays>
        {dates.map((date, index) => (
          <CalendarDay key={index} date={date} />
        ))}
      </StyledCalendarDays>
    </StyledCalendar>
  )
}

export default Calendar
