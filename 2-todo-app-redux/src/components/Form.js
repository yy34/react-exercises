import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo, updateTodo } from "../store/actions/todoActions";
import { Todo } from "../store/constants/Todo";

export const Form = ({ editFormStatus, editTodo, revertFormStat }) => {
  const [todo, setTodo] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    const todoNew = Todo(new Date().getTime(), todo, false);
    setTodo("");
    dispatch(addNewTodo(todoNew));
  };
  const updateTodoSubmit = (e) => {
    e.preventDefault();
    let editedObj = Todo(editTodo.id, editValue, false);
    dispatch(updateTodo(editedObj));
  };
  return (
    <div className="w-100">
      {editFormStatus === false ? (
        <form className="form-group mx-auto" onSubmit={addTodo}>
          <div className="input-wrapper d-flex">
            <input
              type="text"
              placeholder="Add New Todo"
              className="form-control rounded-0 p-2"
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
      ) : (
        <form className="form-group mx-auto" onSubmit={updateTodoSubmit}>
          <div className="input-wrapper d-flex">
            <input
              type="text"
              placeholder="New Todo Name"
              className="form-control rounded-0 p-2"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />

            <div className="d-flex">
              <button
                type="submit"
                className="btn btn-dark rounded-0 btn-md text-uppercase"
              >
                UPDATE
              </button>
              <button
                type="button"
                className="btn btn-link rounded-0 btn-md text-uppercase"
                onClick={revertFormStat}
              >
                BACK
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
