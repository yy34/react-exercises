import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from "../constants/todoActionTypes";

const initialState = [
  { text: "Todo 1", completed: false, id: 1 },
  { text: "Todo 2", completed: true, id: 2 },
  { text: "Todo 3", completed: true, id: 3 },
];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    case UPDATE_TODO:
      return [];

    default:
      return state;
  }
};
