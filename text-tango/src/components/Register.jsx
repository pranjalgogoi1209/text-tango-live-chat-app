import React from "react";
import styled from "styled-components";
import Authentication from "./Authentication";

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
        </form>

        <Authentication toggle={toggle} setToggle={setToggle} />
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
