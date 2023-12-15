import React from "react";
import styled from "styled-components";

export default function MessageBox({ setIsSend, msg }) {
  msg && setIsSend(msg.send);
  return (
    <Wrapper>
      <div className={msg.send ? "MessageBoxLeft" : "MessageBoxRight"}>
        {msg && <div className="msg">{msg.message}</div>}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 30%;
  .MessageBoxLeft {
    border: 1vw solid #007aff;
    border-radius: 0 1.5vw 1.5vw 1.5vw;
  }
  .MessageBoxRight {
    border: 1vw solid #007aff;
    border-radius: 1.5vw 0 1.5vw 1.5vw;
  }
  .msg {
    font-size: 1.2vw;
    padding: 0.5vw;
    background-color: #007aff;
    color: #fff;
  }
`;
