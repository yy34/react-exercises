import React from "react";
import { MainContext, useContext } from "../context/Context";
import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  const data = useContext(MainContext);
  return (
    <div className="Appn">
      <Stack spacing={4} direction="row" align="center">
        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </Stack>
    </div>
  );
};
