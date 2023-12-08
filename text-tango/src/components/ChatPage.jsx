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
    display: flex;
    border: 2px solid red;
    .ChatSidebar {
      width: 35%;
      border: 2px solid black;
    }
    .ChatContainer {
      width: 65%;
      border: 2px solid black;
    }
  }
`;
