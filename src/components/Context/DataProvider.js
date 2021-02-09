import React, {createContext, useReduser} from 'react'
import AddReduder from './AddReducer'

// Initial State

const initialState = {
  user:[
    {id: 1, fname: 'employee one'},
    {id: 2, fname: 'employee two'},
    {id: 3, fname: 'employee tree'}
  ]
}

// create Contexte
export const