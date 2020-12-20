import React from 'react'
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
import { logoutUserThunk } from '../thunk-functions/userThunkFunctions'

const Header = () => {
  const isLessThanMd = useMedia({ query: `(max-width: ${mdSize})` })
  const activity = useSelector((state) => state.header.activity)
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

  const changeActivity = () => dispatch(setActivity(!activity))
  const logout = () => {
    dispatch(logoutUserThunk())
    changeActivity()
  }

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
      <StyledUl>
        {token ? (
          <>
            <li>{getLink(['Calendar', 'calendar'])}</li>
            <li>
              <button onClick={() => logout()}>Log out</button>
            </li>
          </>
        ) : (
          linksData.map(getLink)
        )}
      </StyledUl>
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
