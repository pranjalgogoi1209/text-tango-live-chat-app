import React from "react";
import styled from "styled-components";
import ChatContainer from "./ChatContainer";
import ChatSidebar from "./ChatSidebar";

export default function ChatPage() {
  return (
    <Wrapper>
      <div className="ChatPage">
        <div className="ChatSidebar">
          <ChatSidebar />
        </div>
        <div className="ChatContainer">
          <ChatContainer />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .ChatPage {
    height: 100vh;
    width: 100vw;
    display: flex;
    .ChatSidebar {
      width: 35%;
      border-radius: 0 1vw 1vw 0;
      /* border: 2px solid black; */
    }
    .ChatContainer {
      width: 100%;
      border-radius: 1vw 0 0 1vw;
      /* border: 2px solid black; */
    }
  }
`;
