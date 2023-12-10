import React, { useState } from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { Stack, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register({ toggle, setToggle }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    newPassword: "",
    confirmPassword: "",
  });

  // IMPORTING DATA FROM FORM
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
  const handleValidation = () => {
    if (values.phoneNumber.length < 10 || values.phoneNumber.length > 10) {
      toast.error("phone number should have 10 digits", toastOptions);
      return false;
    } else if (values.newPassword.length < 8) {
      toast.error(
        "password length should be equal to or more than 8 characters",
        toastOptions
      );
      return false;
    } else if (values.newPassword !== values.confirmPassword) {
      toast.error(
        "new-password and confirm-password should be same",
        toastOptions
      );
      return false;
    }
    return true;
  };

  // FORM SUBMISSION
  const handleSubmit = e => {
    e.preventDefault();
    if (handleValidation()) {
      toast.success("Registered Successfully", toastOptions);
      setTimeout(() => {
        setToggle("login");
      }, 5000);
      console.log(values);
    }
  };

  return (
    <Wrapper>
      <div className="Register">
        <header>
          <h1>Register</h1>
          <p>Please register to continue</p>
        </header>

        <form onSubmit={e => handleSubmit(e)}>
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

          <div className="password">
            <TextField
              InputLabelProps={{ className: "text_field" }}
              sx={{
                "& .MuiInputBase-root": {
                  height: "3vw",
                  fontSize: "1.1vw",
                },
              }}
              type="password"
              name="newPassword"
              label="New-Password"
              size="small"
              required
              error={!values.newPassword}
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
              name="confirmPassword"
              label="Confirm-Password"
              size="small"
              required
              error={!values.confirmPassword}
              onChange={e => handleChange(e)}
            />
          </div>

          <Stack direction="row">
            <Button type="submit" variant="outlined" size="small">
              Submit
            </Button>
          </Stack>
        </form>

        <ToggleBtn toggle={toggle} setToggle={setToggle} />
      </div>
      <ToastContainer />
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
      gap: 1.5vw;
      .text_field {
        font-size: 1.1vw;
      }
      .name,
      .password {
        display: flex;
        gap: 2vw;
      }
      input {
        padding: 0.5vw;
        height: 3vw;
      }
    }
  }
`;
