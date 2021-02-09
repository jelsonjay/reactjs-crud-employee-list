import React, {useState ,useContext} from 'react'
import {FormWrapper, Container, ButtonLink, ButtonWrap} from './AddStyled'
import {GlobalContext} from '../Context/GlobalState'
import {useHistory} from 'react-router-dom'

const AddEmployee = () => {
const [newName, setNewName] = useState('')
const {users, addUser} = useContext(GlobalContext)
const history = useHistory()

 const handleSubmit = () => {
  const newUser = {id:5, fname: 'Employee Four'}

 addUser(newUser) 
 history.push('/')
 }

  return (
    <Container>
    <FormWrapper onSubmit={handleSubmit}>
    <label>Add Employee</label>
    <input type='text' placeholder='Add a employee name' />
    <ButtonWrap type='submit'>Add</ButtonWrap>
    <ButtonLink to='/'>Cancel</ButtonLink>
    </FormWrapper>
    </Container>
  )
}

export default AddEmployee
