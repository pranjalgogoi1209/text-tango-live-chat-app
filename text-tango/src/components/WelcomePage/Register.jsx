import React, { useState } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { Stack, Button, TextField } from "@mui/material";

export default function Register({ toggle, setToggle }) {
  // form data : values
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <Wrapper>
      <div className="Register">
        <header>
          <h1>Register</h1>
          <p>Please register to continue</p>
        </header>

        <form>
          <div className="name">
            <TextField
              InputLabelProps={{ className: "text_field" }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "3vw",
                  fontSize: "1.1vw",
                },
              }}
              name="firstName"
              label="First-Name"
              size="small"
              required
              error={!values.firstName}
              onChange={e => handleChange(e)}
            />
            <TextField
              InputLabelProps={{ className: "text_field" }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "3vw",
                  fontSize: "1.1vw",
                },
              }}
              name="lastName"
              label="Last-Name"
              size="small"
              required
              error={!values.lastName}
              onChange={e => handleChange(e)}
            />
          </div>

          <TextField
            InputLabelProps={{ className: "text_field" }}
            sx={{
              "& .MuiInputBase-root": {
                height: "3vw",
                fontSize: "1.1vw",
              },
            }}
            type="number"
            name="phoneNumber"
            label="Phone"
            size="small"
            required
            error={!values.phoneNumber}
            onChange={e => handleChange(e)}
          />

          <TextField
            InputLabelProps={{ className: "text_field" }}
            sx={{
              "& .MuiInputBase-root": {
                height: "3vw",
                fontSize: "1.1vw",
              },
            }}
            type="password"
            name="password"
            label="New-Password"
            size="small"
            required
            error={!values.password}
            onChange={e => handleChange(e)}
          />

          <Stack direction="row">
            <Button variant="outlined" size="small">
              Submit
            </Button>
          </Stack>
        </form>
        <ToggleBtn toggle={toggle} setToggle={setToggle} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  .Register {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3vw 2vw 3vw 2vw;
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
      gap: 1.3vw;
      .text_field {
        font-size: 1.1vw;
      }
      .name {
        display: flex;
        gap: 2vw;
        input {
          width: 50%;
        }
      }
      input {
        padding: 0.5vw;
        height: 3vw;
      }
    }
  }
`;
