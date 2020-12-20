import React from 'react'
import RegistrationForm from '../components/AuthorizationForm/RegistrationForm'
import StyledCenteredMain from '../styles/components/CenteredMain'

const RegistrationPage = () => {
  return (
    <StyledCenteredMain>
      <h2>Registration</h2>
      <RegistrationForm />
    </StyledCenteredMain>
  )
}

export default RegistrationPage
