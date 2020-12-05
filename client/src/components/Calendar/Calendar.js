import React, { useEffect } from 'react'
import { useMedia } from 'react-media'
import {
  StyledCalendar,
  StyledCalendarHeaders,
  StyledCalendarDays,
} from '../../styles/components/Calendar'
import { mdSize } from '../../styles/screenBreakpoints'
import getArrOfDates from '../../utils/getArrOfDates'

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Calendar = () => {
  const isLessThanMd = useMedia({ query: `(max-width: ${mdSize})` })

  const dates = isLessThanMd ? getArrOfDates(null, 1) : getArrOfDates(null, 3)

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
