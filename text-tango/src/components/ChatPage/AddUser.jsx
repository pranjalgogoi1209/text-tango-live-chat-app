import React, { useState } from "react";
import styled from "styled-components";
import { Stack, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export let newUser;

export default function AddUser({ setAddNewUser }) {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  // IMPORTING DATA FROM LOGIN FORM
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // VALIDATION TOASTIFY
  const toastOptions = {
    position: "bottom-left",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // POST REQUEST TO API
  /* const signInUser = (number, password) => {
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
  }; */

  const handleValidation = () => {
    if (values.phoneNumber.length < 10 || values.phoneNumber.length > 10) {
      toast.error("phone number should have 10 digits", toastOptions);
      return false;
    }
    return true;
  };

  // FORM SUBMISSION
  const handleSubmit = e => {
    e.preventDefault();
    if (handleValidation()) {
      toast.success("Added Successfully", toastOptions);
      // Navigate to Chat box of new User
      setAddNewUser(values);
    }
  };

  return (
    <Wrapper>
      <div className="Login">
        <header>
          <h1>Add a Person</h1>
        </header>

        <form onSubmit={e => handleSubmit(e)}>
          <Stack spacing={4}>
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
              variant="standard"
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
              variant="standard"
              size="small"
              required
              error={!values.lastName}
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
              type="number"
              name="phoneNumber"
              label="Phone-Number"
              variant="standard"
              size="small"
              required
              error={!values.phoneNumber}
              onChange={e => handleChange(e)}
            />
          </Stack>

          <Stack>
            <Button
              className="btn"
              type="submit"
              variant="contained"
              size="large"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </div>
      <ToastContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  .Login {
    border: 1px solid black;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5vw;
    padding: 2vw 2vw 2vw 2vw;
    * {
      color: #020c68;
    }
    header {
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 4vw;
      .text_field {
        font-size: 1.1vw;
      }

      .btn {
        color: white;
        background-color: #007aff;
      }
    }
  }
`;
