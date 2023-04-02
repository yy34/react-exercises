import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { CreateUser } from "./components/CreateUser";
import { UpdateUser } from "./components/UpdateUser";
import { GlobalProvider } from "./context/GlobalState";
import { Col, Row } from "antd";
import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Row>
          <Col span={8} offset={8}>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/create" component={CreateUser} />
                <Route path="/update/:id" component={UpdateUser} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Router>
    </GlobalProvider>
  );
};

export default App;
