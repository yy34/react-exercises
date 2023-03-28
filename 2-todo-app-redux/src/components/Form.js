import React from "react";
import { useState } from "react";

export const Form = () => {
  const [todo, setTodo] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    let newTodo = {
      text: todo,
      completed: false,
      id: new Date().getTime(),
    };
    setTodo("");
    console.log(newTodo);
  };
  return (
    <form className="form-group" onSubmit={addTodo}>
      <div className="input-wrapper d-flex">
        <input
          type="text"
          placeholder="Add New Todo"
          className="form-control rounded-0"
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="btn btn-primary rounded-0 btn-md w-25">
          Add Todo
        </button>
      </div>
    </form>
  );
};
