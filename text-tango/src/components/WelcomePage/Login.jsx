import React from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { Stack, Button } from "@mui/material";

export default function Login({ toggle, setToggle }) {
  return (
    <Wrapper>
      <div className="Login">
        <header>
          <h1>LogIn</h1>
          <p>Please login to continue</p>
        </header>
        <form>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
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
    padding: 4vw 2vw 4vw 2vw;
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
      input {
        padding: 0.5vw;
        height: 3vw;
      }
    }
  }
`;
