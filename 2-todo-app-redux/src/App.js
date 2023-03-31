import { TodoList } from "./components/TodoList";
import { Form } from "./components/Form";
import { useState } from "react";
import "./styles/index.scss";

function App() {
  const [editTodo, setEditTodo] = useState("");
  const [editFormStatus, setEditFormStatus] = useState(false);

  const setFormStat = (todo) => {
    setEditFormStatus(true);
    setEditTodo(todo);
  };

  const revertFormStat = () => {
    setEditFormStatus(false);
  };

  return (
    <div className="todo-wrapper">
      <header className="App-header">React Todo App With Redux</header>
      <Form
        editFormStatus={editFormStatus}
        editTodo={editTodo}
        revertFormStat={revertFormStat}
      />
      <TodoList setFormStat={setFormStat} editFormStatus={editFormStatus} />
    </div>
  );
}

export default App;
