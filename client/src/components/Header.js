import React from 'react'
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyledHeader,
  StyledUl,
  StyledBurgrer,
  StyledNav,
  StyledLinkComponent,
} from '../styles/components/Header'

import { mdSize } from '../styles/screenBreakpoints'
import { useMedia } from 'react-media'
import { setActivity } from '../actions/headerActions'

const Header = () => {
  const isLessThanMd = useMedia({ query: `(max-width: ${mdSize})` })
  const activity = useSelector((state) => state.header.activity)
  const dispatch = useDispatch()

  const changeActivity = () => dispatch(setActivity(!activity))

  const getLink = ([text, route]) => {
    return (
      <li
        key={`li-${text}-${route}`}
        onClick={() => isLessThanMd && changeActivity()}
      >
        <StyledLinkComponent to={`/${route}`}>{text}</StyledLinkComponent>
      </li>
    )
  }

  const linksData = [
    ['Registration', 'registration'],
    ['Authorization', 'authorization'],
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
        <StyledBurgrer activity={activity} onClick={() => changeActivity()} />
      )}
      {(!isLessThanMd || activity) && navigation}
    </StyledHeader>
  )
}

export default Header
