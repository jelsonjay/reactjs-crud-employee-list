import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import  {Link} from 'react-router-dom'
import styled from 'styled-components'

const List = () => {

const {users, deleteUser}  = useContext(GlobalContext)

console.log(users)

  return (
    <ListGroup>
    {users.map((item) => {
      return(
        <LisGroupItem key={item.id}>
        <strong>{item.fname}</strong>
        <div>
        <Link to={`/edit/${item.id}`}>Edit</Link>
        <DeleteButton onClick={() => deleteUser(item.id)}>Delete</DeleteButton>
        </div>
        </LisGroupItem>
      )
    })}

    </ListGroup>
  )
}

export default List

const ListGroup = styled.div`
max-width:1100px;
margin: 0 auto;

`
const LisGroupItem = styled.div`
margin-bottom: 20px;
background: hsl(185, 94%, 87%);
font-size:1.9rem;
border-radius:3px;
`

const DeleteButton = styled.button`
display:flex;
justify-content: center;
align-items:center;
background: hsl(184, 77%, 34%);
width:150px;
height: 40px;
font-size:1.5rem;
border-radius: 4px;
cursor: pointer;
`