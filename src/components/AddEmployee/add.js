import React, {useState ,useContext} from 'react'
import {FormWrapper, Container, ButtonLink, ButtonWrap} from './AddStyled'
import {GlobalContext} from '../Context/GlobalState'
import {useHistory} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

const AddEmployee = () => {
const [newName, setNewName] = useState('')
const {addUser} = useContext(GlobalContext)
const history = useHistory()

 const handleSubmit = () => {
  const newUser = {id: uuid(), fname: newName}

 addUser(newUser) 
 history.push('/')
 }


  const onChange = (e) => {
  setNewName(e.target.value)
  }

  return (
    <Container>
    <FormWrapper onSubmit={handleSubmit}>
    <label>Add Employee</label>
    <input value={newName} name='name' onChange={onChange} type='text' placeholder='Add a employee name' />
    <ButtonWrap type='submit'>Add</ButtonWrap>
    <ButtonLink to='/'>Cancel</ButtonLink>
    </FormWrapper>
    </Container>
  )
}

export default AddEmployee
