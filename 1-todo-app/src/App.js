import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const getStorage = () => {
      if (localStorage.getItem("todoList") === null) {
        localStorage.setItem("todoList", JSON.stringify([]));
      } else {
        setTodos(JSON.parse(localStorage.getItem("todoList")));
      }
    };
    getStorage();
  }, []);

  useEffect(() => {
    const filterTodo = () => {
      hideCompleted
        ? setFilteredTodos(todos)
        : setFilteredTodos(todos.filter((todo) => todo.completed === false));
    };
    const saveStorage = () => {
      localStorage.setItem("todoList", JSON.stringify(todos));
    };
    filterTodo();
    saveStorage();
  }, [todos, hideCompleted]);

  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <Form
        newTodo={newTodo}
        todos={todos}
        setTodos={setTodos}
        setNewTodo={setNewTodo}
        hideCompleted={hideCompleted}
        setHideCompleted={setHideCompleted}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
