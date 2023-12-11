import React, { useState } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { Stack, Button, TextField } from "@mui/material";
import { signinLink } from "../../../apiconfig";

export default function Login({ toggle, setToggle }) {
  const [numberValue, setNumberValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const signInUser = ( number, password) => {
    const data = { number, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(signinLink, options)
      .then((response) => response.json())
      .then((data) => {
        // use your data here
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  // signInUser(1234567890, "123456");

  return (
    <Wrapper>
      <div className="Login">
        <header>
          <h1>LogIn</h1>
          <p>Please login to continue</p>
        </header>

        <form>
          <TextField
            InputLabelProps={{ className: "password_field" }}
            sx={{
              "& .MuiInputBase-root": {
                height: "3vw",
                fontSize: "1.1vw",
              },
            }}
            type="number"
            label="Phone"
            size="small"
            required
            error={!numberValue}
            onChange={e => setNumberValue(e.target.value)}
          />
          <TextField
            InputLabelProps={{ className: "password_field" }}
            sx={{
              "& .MuiInputBase-root": {
                height: "3vw",
                fontSize: "1.1vw",
              },
            }}
            type="password"
            label="Password"
            size="small"
            required
            error={!passValue}
            onChange={e => setPassValue(e.target.value)}
          />
          <Stack direction="row">
            <Button variant="outlined" size="small">
              Submit
            </Button>
          </Stack>
        </form>

        <div>
          <p>Forget Password ?</p>
        </div>

        <ToggleBtn toggle={toggle} setToggle={setToggle} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  .Login {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2vw 2vw 2vw 2vw;
    * {
      color: #020c68;
    }
    header {
      display: flex;
      flex-direction: column;
      gap: 1vw;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 2vw;
      .password_field {
        font-size: 1.1vw;
      }
    }
  }
`;
