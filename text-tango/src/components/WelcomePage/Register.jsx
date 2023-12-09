import React from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";
import { Stack, Button } from "@mui/material";

export default function Register({ toggle, setToggle }) {
  return (
    <Wrapper>
      <div className="Register">
        <header>
          <h1>Register</h1>
          <p>Please register to continue</p>
        </header>

        <form>
          <div className="name">
            <input type="name" placeholder="Enter first-name" />
            <input type="name" placeholder="Enter last-name" />
          </div>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter new password" />
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
