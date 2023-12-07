import React from "react";
import styled from "styled-components";

export default function Login() {
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
        </form>
        <div>
          <p>Forget Password ?</p>
        </div>
        <footer>
          <button>LOGIN</button>
          <button>REGISTER</button>
        </footer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .Login {
    display: flex;
    flex-direction: column;
    gap: 4vw;
    padding: 2vw;
    * {
      color: #020c68;
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
    footer {
      display: flex;
      gap: 2vw;
      justify-content: center;
      button {
        padding: 1vw;
      }
    }
  }
`;
