import React from 'react'
import AuthorizationForm from '../components/AuthorizationForm/AuthorizationForm'
import StyledCenteredMain from '../styles/components/CenteredMain'

const Authorization = () => {
  return (
    <StyledCenteredMain>
      <h2>Authorization</h2>
      <AuthorizationForm />
    </StyledCenteredMain>
  )
}

export default Authorization
