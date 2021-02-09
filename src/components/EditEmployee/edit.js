import React, {useContext, useState, useEffect} from 'react'
import {FormWrapper, ButtonCancel, Container, ButtonWrap} from './EditStyles'
import {GlobalContext} from '../Context/GlobalState'
import {useHistory} from 'react-router-dom'


const EditEmployee = (props) => {
  const [selectUser, setSelectUser] = useState({
    id: '',
    fname: ''
  })
  const {users, editUser} = useContext(GlobalContext)
  const history = useHistory()
  const currentUserId = props.match.params.id

  useEffect(() => {
    const userId = currentUserId 
    const selectUser = users.find(user => user.id === userId)
    setSelectUser(selectUser)
  }, [currentUserId, users])
  
  const handleSubmit = () => {
  editUser(selectUser)
   history.push('/')
   }
  
  const onChange = (e) => {
   setSelectUser({...selectUser, [e.target.fname]: e.target.value })
  }

  return (
    <Container>
    <FormWrapper onSubmit={handleSubmit}>
    <label>Edit Employee</label>
    <input type='text' name='fname' value={selectUser.fname} onChange={onChange} placeholder='Add a employee name' />
    <ButtonWrap type='submit'>Editd Name</ButtonWrap>
    <ButtonCancel to='/'>Cancel</ButtonCancel>
    </FormWrapper>
    </Container>
  )
}

export default EditEmployee
