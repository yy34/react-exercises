import { TodoList } from "./components/TodoList";
import { Form } from "./components/Form";
import "./styles/index.scss";

function App() {
  return (
    <div className="todo-wrapper">
      <header className="App-header">React Todo App With Redux</header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
