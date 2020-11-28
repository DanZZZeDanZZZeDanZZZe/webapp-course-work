import styled from 'styled-components'
import { bisque, ghostWhite, oceanGreen } from '../colors'
import { mdSize, smSize } from '../screenBreakpoints'

const StyledMainForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-weight: bold;
  background-color: ${oceanGreen};

  label {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 1rem;
    input {
      padding: 0.5rem;
      width: 70%;
      border: 3px solid ${ghostWhite};
      border-radius: 0.5rem;
      font-size: 1rem;
    }
  }

  button {
    height: 2.5rem;
    width: 7rem;
    font-size: inherit;
    color: inherit;
    background-color: inherit;
    border: 3px solid ${ghostWhite};
    border-radius: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: ${smSize}) {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;

    label {
      flex-direction: column;
      align-items: flex-start;
      width: 80%;
      input {
        font-size: 0.8rem;
        width: 100%;
      }
    }

    button {
      align-self: flex-start;
      margin-top: 1.5rem;
    }
  }

  @media only screen and (min-width: ${smSize}) {
    border-radius: 1rem;
    height: 30%;
    width: 80%;
    padding: 1rem;
    font-size: 1.3rem;

    label {
      align-items: center;
    }

    button {
      align-self: flex-end;
      margin-top: auto;
    }
  }

  @media only screen and (min-width: ${mdSize}) {
    height: 40%;
    width: 40%;
  }
`

export default StyledMainForm
