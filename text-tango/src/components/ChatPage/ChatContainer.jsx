import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  deleteChatLink,
  deleteMessageLink,
  newChatMessageLink,
  updateChatLink,
} from "../../../apiconfig";

export default function ChatContainer({ newUser, singleUser, userId }) {
  const [isProfileShow, setIsProfileShow] = useState(false);
  const updateChat = (newName, userId, chatId) => {
    const data = { newName, userId, chatId };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(updateChatLink, options)
      .then(response => response.json())
      .then(data => {
        // use your data here
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  // DELETE REQUEST TO DELETE CHAT LINK API
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
      .then(response => response.json())
      .then(data => {
        // use your data here
        console.log("ChatContainer, Delete Chat", data);
      })
      .catch(error => console.log(error));
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
      .then(response => response.json())
      .then(data => {
        // use your data here
        console.log(data);
      })
      .catch(error => console.log(error));
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
      .then(response => response.json())
      .then(data => {
        // use your data here
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  const handleDelete = e => {
    console.log("Clicked for delete Chat");
    deleteChat(userId, singleUser._id);
    console.log(singleUser);
    // I need single user data from User component to get the particle user Chat
  };

  return (
    <Wrapper>
      <div className="ChatContainer">
        <header>
          <div className="user" onClick={() => setIsProfileShow(true)}>
            <img
              src="https://th.bing.com/th/id/OIP.Z2S76NihaMgTZl0wTxAM2wHaHa?rs=1&pid=ImgDetMain"
              alt="profile-picture"
            />
            <h1>{singleUser.name}</h1>
          </div>
          <div className="online-status">
            <div></div>
            <p>online</p>
          </div>
        </header>
        <div className={isProfileShow ? "profile show-profile" : "profile"}>
          <h1>{singleUser.name}</h1>
          <button onClick={e => handleDelete(e)}>Delete Chat</button>
        </div>
        <main onClick={() => setIsProfileShow(false)}></main>
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
        gap: 2vw;
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

    .profile {
      border-radius: 1vw 1vw 1vw 1vw;
      background-color: #007aff;
      padding: 2vw 2vw 2vw 2vw;
      width: 30%;
      height: 70%;
      position: absolute;
      top: 0;
      margin-left: 0.3vw;
      transition: all ease 0.5s;
      transform: translateY(-100%);
    }

    .show-profile {
      transform: translateY(0);
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
