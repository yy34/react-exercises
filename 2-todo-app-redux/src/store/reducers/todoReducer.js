import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
} from "../constants/todoActionTypes";

const initialState = [
  { text: "Todo 1", completed: false, id: 1 },
  { text: "Todo 2", completed: true, id: 2 },
  { text: "Todo 3", completed: true, id: 3 },
  { text: "Todo 4", completed: false, id: 4 },
  { text: "Todo 5", completed: false, id: 5 },
];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case COMPLETE_TODO:
      const completedTodos = state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return completedTodos;
    case REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    case UPDATE_TODO:
      let currentTodo = action.payload;
      const updatedArray = [];
      state.map((todo) => {
        if (todo.id === currentTodo.id) {
          todo = currentTodo;
        }
        updatedArray.push(todo);
        return true;
      });
      return updatedArray;

    default:
      return state;
  }
};
