import styled from 'styled-components'
import { bisque, eggplant, maroonX11, oceanGreen } from '../colors'
import { lgSize, mdSize, smSize } from '../screenBreakpoints'

const StyledCalendar = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: ${oceanGreen};
  padding: 1rem;
  font-size: 1.3rem;

  @media only screen and (max-width: ${mdSize}) {
    width: 100%;
  }

  @media only screen and (min-width: ${mdSize}) and (max-width: ${lgSize}) {
  }

  @media only screen and (min-width: ${mdSize}) {
    width: 90%;
    height: 80rem;
    min-height: 40rem;
    margin-top: 5rem;
    flex-direction: column;
  }
`

const StyledCalendarHeaders = styled.div`
  display: grid;
  background-color: ${bisque};
  font-weight: bold;

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

  & p {
    text-align: center;
  }

  @media only screen and (max-width: ${smSize}) {
    & div {
      min-height: 10rem;
    }
  }

  @media only screen and (min-width: ${mdSize}) {
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`

const StyledCalendarDay = styled.div`
  @media only screen and (max-width: ${smSize}) {
  }

  @media only screen and (min-width: ${mdSize}) {
    display: flex;
    flex-direction: column;
    & button {
      margin-top: 0.5rem;
      height: 2rem;
      background-color: ${bisque};
      border: none;
      border-radius: 0.5rem;
      font-size: inherit;
    }
  }
`

const StyledCalendarNote = styled.div`
  color: white;

  &:nth-child(n) {
    background-color: ${eggplant};
  }

  &:nth-child(2n) {
    background-color: ${maroonX11};
  }

  padding: 1rem;
  border-radius: 0.5rem;
  @media only screen and (max-width: ${smSize}) {
  }

  @media only screen and (min-width: ${mdSize}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2rem;
  }
`

export {
  StyledCalendar,
  StyledCalendarHeaders,
  StyledCalendarDays,
  StyledCalendarDay,
  StyledCalendarNote,
}
