import React, {createContext, useReducer} from 'react'
import AddReduder from './AddReducer'

// Initial State
const initialState = {
  users:[
    // {id: 1, fname: 'employee one'},
    // {id: 2, fname: 'employee two'},
    // {id: 3, fname: 'employee tree'}
  ]
}

// create Contexte
export const GlobalContext = createContext(initialState)

// Provider Cpmponent
export const DataProvider = ({children}) => {
  
const [state, dispatch] = useReducer(AddReduder, initialState)

  // Create Actions delete user
  const deleteUser = (id) => {
    dispatch({type: 'DELETE_USER', payload: id
    })
  }

  // Create Actions ad user
  const addUser = (user) => {
    dispatch({type: 'ADD_USER', payload: user
    })
  }
// Create Actions ad user
 const edditUser = (user) =>{
 dispatch({
   type: 'EDIT_USER', payload: addUser, user
 })
 }
return(
  <GlobalContext.Provider value={{
    users: state.users, deleteUser, addUser, edditUser}}>
    {children}
  </GlobalContext.Provider>
)


}