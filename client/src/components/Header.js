import React, { useState } from 'react'
import {
  StyledHeader,
  StyledUl,
  StyledBurgrer,
  StyledNav,
  StyledLinkComponent,
} from '../styles/components/Header'

import { mdSize } from '../styles/screenBreakpoints'
import { useMedia } from 'react-media'

const Header = () => {
  const isLessThanMd = useMedia({ query: `(max-width: ${mdSize})` })
  const [isActive, setActive] = useState(false)

  const changeActive = () => {
    isLessThanMd && setActive(!isActive)
  }

  const getLink = ([text, route]) => {
    return (
      <li key={`li-${text}-${route}`} onClick={changeActive}>
        <StyledLinkComponent to={`/${route}`}>{text}</StyledLinkComponent>
      </li>
    )
  }

  const linksData = [
    ['Registration', 'registration'],
    ['Login', 'login'],
  ]

  const navigation = (
    <StyledNav>
      <StyledUl>{linksData.map(getLink)}</StyledUl>
    </StyledNav>
  )

  return (
    <StyledHeader>
      <h1>Calendar</h1>
      {isLessThanMd && (
        <StyledBurgrer
          isActive={isActive}
          onClick={() => setActive(!isActive)}
        />
      )}
      {(!isLessThanMd || isActive) && navigation}
    </StyledHeader>
  )
}

export default Header
