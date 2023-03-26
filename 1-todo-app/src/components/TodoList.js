import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            todoText={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
      {todos.length > 0 && (
        <div className="todo-count">
          <div>
            To-do's : <strong>{todos.length}</strong>
          </div>
          <div>
            Completed todos:
            <strong>
              {todos.filter((item) => item.completed === true).length}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};
export default TodoList;
