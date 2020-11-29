import React from 'react'
import { useForm } from 'react-hook-form'
import { loginUserThunk } from '../../thunk-functions/userThunkFunctions'

import StyledMainForm from '../../styles/components/MainForm'
import { useDispatch } from 'react-redux'

const AuthorizationForm = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) => dispatch(loginUserThunk(data))

  return (
    <StyledMainForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:{' '}
        <input name="email" type="email" placeholder="Email" ref={register} />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
        />
      </label>
      <button>Login</button>
    </StyledMainForm>
  )
}

export default AuthorizationForm
