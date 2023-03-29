import * as TYPES from "../constants/todoActionTypes";

export const addNewTodo = (payload) => {
  return {
    type: TYPES.ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: TYPES.REMOVE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: TYPES.UPDATE_TODO,
    payload,
  };
};
