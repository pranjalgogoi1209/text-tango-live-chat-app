import React, { useState } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { Stack, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signinLink } from "../../../apiconfig";
import { useNavigate } from "react-router-dom";

export default function Login({ toggle, setToggle, setUserId }) {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    phoneNumber: "",
    password: "",
  });

  // IMPORTING DATA FROM LOGIN FORM
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // VALIDATION TOASTIFY
  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // POST REQUEST TO SIGNINLINK API
  const signInUser = (number, password) => {
    const data = { number, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(signinLink, options)
      .then(response => response.json())
      .then(data => {
        if (data.code === 404) {
          toast.error(
            "your phone number or password is incorrect",
            toastOptions
          );
        } else {
          setUserId(data.user._id);
          Navigate("/chat");
        }
      })
      .catch(error => console.log(error));
  };

  // FORM SUBMISSION
  const handleSubmit = e => {
    e.preventDefault();
    signInUser(values.phoneNumber, values.password);
  };

  return (
    <Wrapper>
      <div className="Login">
        <header>
          <h1>LogIn</h1>
          <p>Please login to continue</p>
        </header>

        <form onSubmit={e => handleSubmit(e)}>
          <TextField
            InputLabelProps={{ className: "password_field" }}
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
            InputLabelProps={{ className: "password_field" }}
            sx={{
              "& .MuiInputBase-root": {
                height: "3vw",
                fontSize: "1.1vw",
              },
            }}
            type="password"
            name="password"
            label="Password"
            size="small"
            required
            error={!values.password}
            onChange={e => handleChange(e)}
          />
          <Stack direction="row">
            <Button type="submit" variant="outlined" size="small">
              Submit
            </Button>
          </Stack>
        </form>

        <div>
          <p>Forget Password ?</p>
        </div>

        <ToggleBtn toggle={toggle} setToggle={setToggle} />
      </div>
      <ToastContainer />
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
