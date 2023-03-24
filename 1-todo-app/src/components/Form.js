import React from "react";

const Form = ({ setNewTodo, newTodo, todos, setTodos }) => {
  const setInput = (e) => {
    setNewTodo(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: newTodo, completed: false, id: Math.random() * 1000 },
    ]);
    setNewTodo("");
  };
  return (
    <form>
      <input
        placeholder="Enter New Todo"
        value={newTodo}
        onChange={setInput}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="todo-check-completed">
        <label>
          <input type="checkbox" />
          Hide Completed
        </label>
      </div>
    </form>
  );
};

export default Form;
