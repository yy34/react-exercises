import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { MainContext } from "./context/Context";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
function App() {
  const [login, setlogin] = useState(false);
  const data = {
    login,
    setlogin,
  };

  return (
    <ChakraProvider>
      <MainContext.Provider value={data}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/">
                <Header />
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </MainContext.Provider>
    </ChakraProvider>
  );
}

export default App;
