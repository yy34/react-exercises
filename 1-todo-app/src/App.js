import React, { useState } from "react";
import "./styles/App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <Form
        newTodo={newTodo}
        todos={todos}
        setTodos={setTodos}
        setNewTodo={setNewTodo}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
