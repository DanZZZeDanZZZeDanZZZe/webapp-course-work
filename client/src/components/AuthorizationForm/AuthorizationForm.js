import React from 'react'
import StyledMainForm from '../../styles/components/MainForm'
const AuthorizationForm = () => {
  return (
    <StyledMainForm>
      <label>
        Email: <input name="email" type="email" placeholder="Email" />
      </label>
      <label>
        Password:
        <input name="Password" type="password" placeholder="Password" />
      </label>
      <button>Login</button>
    </StyledMainForm>
  )
}

export default AuthorizationForm
