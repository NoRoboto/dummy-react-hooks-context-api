export const deleteTransaction = dispatch => id => {
  return dispatch({
    type: "DELETE_TRANSACTION",
    payload: id
  });
};

export const addTransaction = dispatch => transaction => {
  return dispatch({
    type: "ADD_TRANSACTION",
    payload: transaction
  });
};
