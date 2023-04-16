import React, { useState, useEffect } from "react";
import { MainContext, useContext } from "../context/Context";
import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { setlogin, login } = useContext(MainContext);
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    try {
      setLoginStatus(JSON.parse(localStorage.getItem("login")));
    } catch (e) {
      setLoginStatus("");
    }
  }, [login]);

  const logout = () => {
    localStorage.removeItem("login");
    setlogin(true);
  };

  return (
    <div className="App">
      {!login && loginStatus?.userIsLogged ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <Stack spacing={4} direction="row" align="center">
          <Link to="/login">
            <Button>Login</Button>
          </Link>

          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </Stack>
      )}
    </div>
  );
};
