import React from 'react'
import {FormWrapper,
  Container, ButtonLink, ButtonWrap} from './AddStyled'

const AddEmployee = () => {
  return (
    <Container>
    <FormWrapper>
    <label>Add Employee</label>
    <input type='text' placeholder='Add a employee name' />
    <ButtonWrap type='submit'>Add</ButtonWrap>
    <ButtonLink to='/'>Cancel</ButtonLink>
    </FormWrapper>
    </Container>
  )
}

export default AddEmployee
