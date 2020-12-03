import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { oceanGreen, ghostWhite, maroonX11 } from '../colors'
import { mdSize } from '../screenBreakpoints'
import { greaterTnanMdHeaderHeight, lessTnanMdHeaderHeight } from '../variables'

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: ${oceanGreen};
  color: ${ghostWhite};

  @media only screen and (max-width: ${mdSize}) {
    height: ${lessTnanMdHeaderHeight};
    font-size: 0.8rem;
  }

  @media only screen and (min-width: ${mdSize}) {
    height: ${greaterTnanMdHeaderHeight};
  }
`

const StyledNav = styled.nav`
  @media only screen and (max-width: ${mdSize}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.5);
    z-index: 1;
  }
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 1.3rem;

  & li {
    & button {
      background-color: inherit;
      border: none;
      font-size: inherit;
      color: inherit;

      &:hover {
        cursor: pointer;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: ${mdSize}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 30%;
    flex-direction: column;
    padding-top: ${lessTnanMdHeaderHeight};
    background-color: ${maroonX11};
    z-index: 2;
    & li {
      margin-top: 2rem;
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (min-width: ${mdSize}) {
    & li {
      padding-left: 1rem;
    }
  }
`

const StyledLinkComponent = styled(Link)`
  text-decoration: none;
  color: white;
`
const StyledBurgrer = styled.button`
  min-height: 1.5rem;
  min-width: 1.5rem;
  margin-left: auto;
  margin-right: 1rem;
  background-color: initial;
  border: 2px solid ${ghostWhite};
  border-radius: ${({ activity }) => `${activity ? '100' : '5'}px`};
  z-index: 2;

  & {
    cursor: pointer;
  }
`

export { StyledHeader, StyledUl, StyledBurgrer, StyledLinkComponent, StyledNav }
