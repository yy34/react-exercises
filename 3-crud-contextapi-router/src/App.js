import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { CreateUser } from "./components/CreateUser";
import { UpdateUser } from "./components/UpdateUser";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/add" component={CreateUser} exact />
            <Route path="/update/:id" component={UpdateUser} exact />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
};

export default App;
