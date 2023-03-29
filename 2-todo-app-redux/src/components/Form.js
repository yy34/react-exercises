import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../store/actions/todoActions";

export const Form = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    let newTodo = {
      text: todo,
      completed: false,
      id: new Date().getTime(),
    };
    setTodo("");
    dispatch(addNewTodo(newTodo));
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
        <button
          type="submit"
          className="btn btn-primary rounded-0 btn-md w-25 text-uppercase"
        >
          Add
        </button>
      </div>
    </form>
  );
};
