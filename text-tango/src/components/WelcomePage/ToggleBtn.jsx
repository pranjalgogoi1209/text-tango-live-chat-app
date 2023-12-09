import React from "react";
import { ToggleButtonGroup, ToggleButton, Stack } from "@mui/material";

export default function ToggleBtn({ toggle, setToggle }) {
  const handleToggle = (e, alignment) => {
    setToggle(alignment);
  };
  return (
    <Stack component="footer">
      <ToggleButtonGroup
        value={toggle}
        onChange={handleToggle}
        color="primary"
        exclusive
      >
        <ToggleButton value="login">LOGIN</ToggleButton>
        <ToggleButton value="register">REGISTER</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
