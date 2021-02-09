import React, {createContext, useReducer} from 'react'
import AddReduder from './AddReducer'

// Initial State
const initialState = {
  users:[
    {id: 1, fname: 'employee one'},
    {id: 2, fname: 'employee two'},
    {id: 3, fname: 'employee tree'}
  ]
}

// create Contexte
export const GlobalContext = createContext(initialState)

// Provider Cpmponent
export const DataProvider = ({children}) => {
  
const [state, dispatch] = useReducer(AddReduder, initialState)

return(
  <GlobalContext.Provider value={{users: state.users}}>
    {children}
  </GlobalContext.Provider>
)


}