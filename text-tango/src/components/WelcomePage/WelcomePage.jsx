import React, { useState } from "react";
import styled from "styled-components";
import welcomeImg from "./../../assets/welcome-img.png";
import Login from "./Login";
import Register from "./Register";

export default function WelcomePage({ setUserId }) {
  let [toggle, setToggle] = useState("register");

  // VALUE OF TOGGLE WILL NEVER BECOME NULL
  if (!toggle) setToggle("register");

  return (
    <Wrapper>
      <div className="Welcome">
        <div className="welcome-img">
          <img src={welcomeImg} alt="welcome-image" />
        </div>
        <div className="auth">
          {toggle === "login" && (
            <Login
              toggle={toggle}
              setToggle={setToggle}
              setUserId={setUserId}
            />
          )}
          {toggle === "register" && (
            <Register toggle={toggle} setToggle={setToggle} />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #2281ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .Welcome {
    background-color: #e0edfe;
    height: 70vh;
    width: 70vw;
    border-radius: 2vw;
    display: flex;
    .welcome-img {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 85%;
      }
    }
    .auth {
      width: 50%;
      background-color: #fff;
      border-radius: 2vw 2vw 2vw 2vw;
    }
  }
`;
