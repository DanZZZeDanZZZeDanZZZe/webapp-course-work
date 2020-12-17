import React from 'react'
import { useForm } from 'react-hook-form'
import { registrationUserThunk } from '../../thunk-functions/userThunkFunctions'

import StyledMainForm from '../../styles/components/MainForm'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()
  const onSubmit = (data) => {
    history.push('/authorization')
    dispatch(registrationUserThunk(data))
  }

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
      <button name="registration">Registration</button>
    </StyledMainForm>
  )
}

export default RegistrationForm
