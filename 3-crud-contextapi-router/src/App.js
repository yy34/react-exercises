import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { CreateUser } from "./components/CreateUser";
import { UpdateUser } from "./components/UpdateUser";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateUser} />
            <Route path="/update/:id" component={UpdateUser} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
};

export default App;
