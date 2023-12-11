import React from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.png";

export default function ChatWelcome() {
  return (
    <Wrapper>
      <div className="ChatWelcome">
        <img src={logo} />
        <h1>Welcome to Text-Tango</h1>
        <h2>Please add someone to Start Messaging</h2>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  .ChatWelcome {
    text-align: center;
    img {
      width: 15vw;
      height: 15vw;
    }
    h2 {
      font-weight: normal;
    }
  }
`;
