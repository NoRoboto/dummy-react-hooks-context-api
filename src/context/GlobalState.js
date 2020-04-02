import React, { createContext, useReducer } from "react";
import { deleteTransaction, addTransaction } from "./AppActions";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  /* 
    TODO: Apply redux like middleware;
    https://dev.to/vanderleisilva/middlewares-with-react-context-and-hooks-2gm1

  */
  const deleteTransactionAction = deleteTransaction(dispatch);
  const addTransactionAction = addTransaction(dispatch);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactionAction,
        addTransactionAction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
