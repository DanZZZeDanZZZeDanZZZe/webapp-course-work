import styled from 'styled-components'
import { lgSize, mdSize, smSize } from '../screenBreakpoints'

const StyledCalendar = styled.div`
  display: flex;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 1rem;

  @media only screen and (max-width: ${mdSize}) {
    width: 100%;
  }

  @media only screen and (min-width: ${mdSize}) and (max-width: ${lgSize}) {
  }

  @media only screen and (min-width: ${mdSize}) {
    width: 90%;
    height: 50rem;
    min-height: 40rem;
    flex-direction: column;
  }
`

const StyledCalendarHeaders = styled.div`
  display: grid;
  border: 1px solid pink;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: ${mdSize}) {
  }

  @media only screen and (min-width: ${mdSize}) and (max-width: ${lgSize}) {
  }

  @media only screen and (min-width: ${mdSize}) {
    width: 100%;
    height: 2rem;
    grid-template-columns: repeat(7, 1fr);
  }
`

const StyledCalendarDays = styled.div`
  flex-grow: 1;
  display: grid;
  border: 1px solid red;

  & div {
    border: 1px solid black;
  }

  @media only screen and (max-width: ${smSize}) {
    & div {
      min-height: 10rem;
    }
  }

  @media only screen and (min-width: ${mdSize}) {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

export { StyledCalendar, StyledCalendarHeaders, StyledCalendarDays }
