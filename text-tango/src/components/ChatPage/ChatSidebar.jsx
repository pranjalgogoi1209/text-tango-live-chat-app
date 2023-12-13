import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import User from "./User";
import { deleteChatLink } from "../../../apiconfig";

export default function ChatSidebar({
  setIsAddUser,
  newUser,
  setSingleUser,
  userId,
  allChat,
}) {
  // new created user
  // console.log("new created user", newUser.allChats[0]);
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
        console.log(data);
      })
      .catch(error => console.log(error));
  };
  // deleteChat("6575c9f5ad262e8fa5d027d8", "6575cf874f8e9ab1e6cda5f9");

  return (
    <Wrapper>
      <div className="ChatSidebar">
        {/* header */}
        <header>
          <div>
            <h1>Text-Tango</h1>
          </div>
          <div className="header-icons">
            <IconButton onClick={() => setIsAddUser(true)}>
              <AddCircleIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </header>
        {/* search-bar */}
        <div className="search-bar">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search Here.." />
        </div>
        {/* users */}
        <div className="users">
          {/* FOR ALL CHATS  */}{" "}
          {allChat &&
            allChat.user.chats.map(user => (
              <User
                user={user}
                setIsAddUser={setIsAddUser}
                key={user._id}
                setSingleUser={setSingleUser}
              />
            ))}
          {/* AFTER ADDUSER NEW CHAT*/}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  .ChatSidebar {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    padding: 2vw;
    height: 100%;
    background-color: #007aff;
    color: #fff;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-icons {
        display: flex;
        svg {
          color: #fff;
          font-size: 2.3vw;
        }
      }
    }

    .search-bar {
      display: flex;
      gap: 1vw;
      background-color: rgb(255, 255, 255, 0.2);
      padding: 0.5vw;
      border-radius: 0.5vw;
      svg {
        color: #fff;
        font-size: 2vw;
      }
      input {
        background-color: transparent;
        color: #fff;
        outline: none;
        border: none;
      }
      ::placeholder {
        color: #fff;
      }
    }

    .users {
      display: flex;
      flex-direction: column;
      gap: 2vw;
    }
  }
`;
