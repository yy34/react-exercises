import React, { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { MainContext } from "./context/Context";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App({ routes }) {
  const [login, setlogin] = useState(false);
  const data = {
    login,
    setlogin,
  };

  return (
    <ChakraProvider>
      <MainContext.Provider value={data}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </ChakraProvider>
  );
}

export default App;
