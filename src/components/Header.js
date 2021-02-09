import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
    <LogoBrand href='/'>Employee List</LogoBrand>
    <NavWrap>
    <NavItem>
    <LogoLink to='/add'>Add Employee</LogoLink>
    </NavItem>
    </NavWrap>
    </Container>
  )
}

export default Header

const Container = styled.div`
background: #444;
max-width:1100px;
margin: 0 auto;

@media screen and (max-width: 768px){
  Container{

  }
}
`
const LogoBrand = styled.p`
display:flex;
justify-content:space-between;
align-items: center;
font-size:2rem;
color:#f2f2f2;
`
const LogoLink = styled(Link)`
display:flex;
text-decoration:none;
background:#f2f2f2;
justify-content:space-between;
align-items:center;
margin:20px;
border-radius:5px;
width:200px;
height: 40px;
font-size:1.5rem;
border: 0;
outline: 0;
border: 1px solid coral;
cursor: pointer;
`
const NavWrap = styled.nav`

`

const NavItem = styled.div`

`