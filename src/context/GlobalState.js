//create context here

import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state

const initialState = {
 //any global state goes on this object

  transactions: [
      { id: 1, text: 'Flowers', amount: -20 }, //expense
      { id: 2, text: 'Salary', amount: 300 }, //income
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
  ]

}

// CreateContext

export const GlobalContext = createContext(initialState)

// Provider component

export default function GlobalProvider ({ children }) {
  const [state, dispatch] = useReducer(AppReducer,initialState)

  // Actions 

  //delete

  function deleteTransaction (id) {

    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
  }

  //addtransaction

  function addTransaction (transaction) {
      dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
      })
  } 

  return(
      <GlobalContext.Provider value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
      }}>
          {children}
      </GlobalContext.Provider>
  )
}