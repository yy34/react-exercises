import React from "react";
import { MainContext, useContext } from "../context/Context";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
export const Header = () => {
  const data = useContext(MainContext);
  return (
    <div className="Appn">
      <Stack spacing={4} direction="row" align="center">
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue">Login</Button>
          <Button>Register</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
};
