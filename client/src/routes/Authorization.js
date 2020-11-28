import React from 'react'
import StyledCenteredMain from '../styles/components/CenteredMain'
import StyledMainForm from '../styles/components/MainForm'

const Authorization = () => {
  return (
    <StyledCenteredMain>
      <StyledMainForm>
        <label>
          Email: <input type="email" />
        </label>
        <label>
          Password: <input type="password" />
        </label>
        <button>Login</button>
      </StyledMainForm>
    </StyledCenteredMain>
  )
}

export default Authorization
