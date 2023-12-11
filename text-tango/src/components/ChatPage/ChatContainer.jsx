import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { deleteChatLink, deleteMessageLink, newChatMessageLink, updateChatLink } from "../../../apiconfig";
export default function ChatContainer() {

  const updateChat = (newName , userId, chatId) => {
    const data = { newName, userId, chatId };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(updateChatLink, options)
      .then((response) => response.json())
      .then((data) => {
        // use your data here
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const deleteChat = (userId, chatId) => {
    const data = { userId, chatId };
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(deleteChatLink, options)
      .then((response) => response.json())
      .then((data) => {
        // use your data here
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const saveNewChatMessage = (userId, chatId, send, message) => {
    const data = { userId, chatId, send, message };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(newChatMessageLink, options)
      .then((response) => response.json())
      .then((data) => {
        // use your data here
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const deleteChatMessage = (userId, chatId, messageId) => {
    const data = { userId, chatId, messageId };
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(deleteMessageLink, options)
      .then((response) => response.json())
      .then((data) => {
        // use your data here
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <div className="ChatContainer">
        <header>
          <div className="user">
            <img
              src="https://th.bing.com/th/id/OIP.Z2S76NihaMgTZl0wTxAM2wHaHa?rs=1&pid=ImgDetMain"
              alt="profile-picture"
            />
            <h1>Pranjal Gogoi</h1>
          </div>
          <div className="online-status">
            <div></div>
            <p>online</p>
          </div>
        </header>
        <main></main>
        <footer>
          <input type="text" placeholder="Type your message here..." />
          <div className="send">
            <IconButton>
              <SendRoundedIcon />
            </IconButton>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .ChatContainer {
    height: 100vh;
    /* border: 1px solid black; */
    header {
      color: #1a1a1a;
      display: flex;
      justify-content: space-between;
      background-color: #f8f9fb;
      padding: 2vw;
      border-radius: 1vw 0 0 0vw;
      box-shadow: 0.2vw 0.1vw 0.7vw #ddd;
      .user {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
        img {
          border-radius: 50%;
          height: 4vw;
          width: 4vw;
        }
      }
      .online-status {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5vw;
        div {
          height: 1vw;
          width: 1vw;
          border-radius: 50%;
          background-color: green;
        }
      }
    }

    main {
      height: 73vh;
    }

    footer {
      background-color: #ebebeb;
      display: flex;
      gap: 1vw;
      justify-content: space-between;
      align-items: center;
      padding: 1vw;
      border-radius: 0.5vw;
      input {
        background-color: transparent;
        outline: none;
        border: none;
      }
      ::placeholder {
      }
      .send {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #007aff;
        border-radius: 50%;
        svg {
          font-size: 2vw;
          color: #fff;
        }
      }
    }
  }
`;
