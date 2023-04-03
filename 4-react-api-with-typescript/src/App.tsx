import "./App.css";
import "antd/dist/reset.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Github Api TypeScript</h1>
      <Outlet />
    </div>
  );
}

export default App;
