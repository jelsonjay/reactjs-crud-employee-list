import React from 'react'
import {FormWrapper, ButtonCancel,
  Container, 
  ButtonWrap} from './EditStyles'

const EditEmployee = () => {
  return (
    <Container>
    <FormWrapper>
    <label>Edit Employee</label>
    <input type='text' placeholder='Add a employee name' />
    <ButtonWrap type='submit'>Edit Name</ButtonWrap>
    <ButtonCancel to='/'>Cancel</ButtonCancel>
    </FormWrapper>
    </Container>
  )
}

export default EditEmployee
