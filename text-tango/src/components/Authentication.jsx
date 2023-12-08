import React from "react";
import { ToggleButtonGroup, ToggleButton, Stack } from "@mui/material";

export default function Authentication({ toggle, setToggle }) {
  const handleToggle = (e, alignment) => {
    setToggle(alignment);
  };
  const handleLogin = () => {
    console.log("login clicked");
  };
  const handleRegister = () => {
    console.log("register clicked");
  };
  return (
    <Stack component="footer">
      <ToggleButtonGroup
        value={toggle}
        onChange={handleToggle}
        color="primary"
        exclusive
      >
        <ToggleButton value="login" onClick={handleLogin}>
          LOGIN
        </ToggleButton>
        <ToggleButton value="register" onClick={handleRegister}>
          REGISTER
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
