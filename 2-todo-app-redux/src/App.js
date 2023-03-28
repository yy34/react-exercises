import { TodoList } from "./components/TodoList";
import { Form } from "./components/Form";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        React Todo App With Redux
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
