import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
max-width: 650px;
margin: 0 auto;
background: #ccc;
display: flex;
justify-content:center;
align-items:center;
border-radius: 4px;

`
export const ButtonWrap = styled.button`
width: 150px;
height:40px;
top:0;
left:0;
right: 50px;
font-size: 1.5rem;
border: 1px solid coral;
border-radius: 4px;
margin:1rem;

`

export const FormWrapper = styled.form`
width: 100%;

label{
font-size: 1.5rem;
margin:10px;
}

input{
width: 250px;
height:40px;
border: 0;
border-radius:4px;
font-size:1rem;
margin:10px;

}
`

export const ButtonLink = styled(Link)`
display:flex;
position:absolute;
text-decoration:none;
background:#f2f2f2;
left: 1230px;
top:76px;
justify-content:space-between;
align-items:center;
margin:20px;
border-radius:5px;
width:250px;
height: 40px;
font-size:1.5rem;
border: 0;
outline: 0;
border: 1px solid coral;
cursor: pointer;
`