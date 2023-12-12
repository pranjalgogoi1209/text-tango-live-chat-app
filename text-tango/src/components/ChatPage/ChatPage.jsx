import React, { useState } from "react";
import styled from "styled-components";
import ChatContainer from "./ChatContainer";
import ChatSidebar from "./ChatSidebar";
import { getChatsLink } from "../../../apiconfig";
import ChatWelcome from "./ChatWelcome";
import AddUser from "./AddUser";

export default function ChatPage({ userId }) {
  const [isAddUser, setIsAddUser] = useState(false);
  const [newUser, setNewUser] = useState();

  // GET REQUEST FROM GET CHATS LINK API
  const getAllChats = userId => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`${getChatsLink}/${userId}`, options)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
      })
      .catch(error => console.log(error));
  };

  // userId is coming from Login component
  userId && getAllChats(userId);

  return (
    <Wrapper>
      <div className="ChatPage">
        <div className="ChatSidebar">
          <ChatSidebar setIsAddUser={setIsAddUser} newUser={newUser} />
        </div>
        <div className="ChatContainer">
          {isAddUser === false && <ChatWelcome />}
          {isAddUser === true && (
            <AddUser
              setNewUser={setNewUser}
              userId={userId}
              setIsAddUser={setIsAddUser}
            />
          )}
          {isAddUser === null && <ChatContainer newUser={newUser} />}
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
