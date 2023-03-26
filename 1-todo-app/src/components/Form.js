import React from "react";

const Form = ({
  setNewTodo,
  newTodo,
  todos,
  setTodos,
  hideCompleted,
  setHideCompleted,
}) => {
  const setInput = (e) => {
    setNewTodo(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([
        ...todos,
        { text: newTodo, completed: false, id: new Date().getTime() },
      ]);
      setNewTodo("");
    }
  };
  const changeStatus = (e) => {
    setHideCompleted(!hideCompleted);
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
          <input
            type="checkbox"
            value={hideCompleted}
            onChange={changeStatus}
          />
          Hide Completed
        </label>
      </div>
    </form>
  );
};

export default Form;
