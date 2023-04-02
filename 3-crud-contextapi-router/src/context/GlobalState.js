import React, { createContext, useReducer } from "react";
import * as TYPES from "../constants/ActionTypes";
import AppReducer from "./AppReducer";

const initialState = {
  users: [],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const createUser = (user) => {
    dispatch({
      type: TYPES.CREATE_USER,
      payload: user,
    });
  };
  const removeUser = (id) => {
    dispatch({
      type: TYPES.REMOVE_USER,
      payload: id,
    });
  };
  const updateUser = (user) => {
    dispatch({
      type: TYPES.UPDATE_USER,
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        createUser,
        removeUser,
        updateUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
