import React from "react";

const Todo = ({ todoText, todo, setTodos, todos }) => {
  const removeTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todoText}
      </li>
      <button onClick={completeTodo} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={removeTodo} className="remove-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
