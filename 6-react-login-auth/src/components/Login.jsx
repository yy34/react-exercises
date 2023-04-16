import React, { useState } from "react";
import { Button, Input, Stack } from "@chakra-ui/react";
import { MainContext, useContext } from "../context/Context";

import { useNavigate } from "react-router-dom";

import axios from "axios";

export const Login = () => {
  const { setlogin } = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            userIsLogged: true,
            token: res.data.token,
          })
        );
        setEmail("");
        setPassword("");
        setlogin(false);
        navigate("/");
      })
      .catch((error) => console.log(error?.response?.data?.message));
  };
  return (
    <div>
      <form noValidate onSubmit={submit}>
        <Input
          variant="flushed"
          placeholder="Username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          variant="flushed"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Stack spacing="20px" mt={15}>
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </div>
  );
};
