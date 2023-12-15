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
  const [isUserProfile, setIsUserProfile] = useState(false);
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

  const handleClickUserProfile = e => {
    e.stopPropagation();
    setIsUserProfile(true);
  };

  return (
    <Wrapper>
      <div className="ChatSidebar" onClick={() => setIsUserProfile(false)}>
        {/* header */}
        <header>
          <div>
            <h1>Text-Tango</h1>
          </div>
          <div className="header-icons">
            <IconButton onClick={() => setIsAddUser(true)}>
              <AddCircleIcon />
            </IconButton>
            <IconButton onClick={e => handleClickUserProfile(e)}>
              <MoreVertIcon />
            </IconButton>
          </div>
        </header>

        {/* show user profile section */}
        <section
          className={
            isUserProfile ? "user-profile show-user-profile " : "user-profile "
          }
        >
          {allChat && (
            <h1>{allChat.user.firstName + " " + allChat.user.lastName}</h1>
          )}
          {allChat && <h2>{allChat.user.number}</h2>}
        </section>

        {/* search-bar */}
        <div className="search-bar">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search Here.." />
        </div>
        {/* users */}
        <div className="users">
          {/* FOR ALL CHATS  */}
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
  height: 100%;
  .ChatSidebar {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    padding: 2vw 1vw 0 2vw;
    background-color: #007aff;
    color: #fff;
    header {
      padding-right: 1vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-size: 3vw;
      }
      .header-icons {
        display: flex;
        svg {
          color: #fff;
          font-size: 2.3vw;
        }
      }
    }
    .user-profile {
      display: flex;
      flex-direction: column;
      gap: 1vw;
      color: #007aff;
      position: absolute;
      top: 6vw;
      left: 11.2vw;
      background-color: #fff;
      height: 20vw;
      width: 20vw;
      border-radius: 1vw;
      /* transition: all ease 0.5s; */
      transform: translateY(-140%);
      padding: 2vw;
      h1 {
        font-size: 1.8vw;
      }
      h2 {
        font-size: 1.2vw;
      }
    }

    .show-user-profile {
      transform: translateY(0);
    }
    .search-bar {
      display: flex;
      gap: 1vw;
      background-color: rgb(255, 255, 255, 0.2);
      padding: 0.5vw;
      margin-right: 1vw;
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
        width: 100%;
        height: 100%;
      }
      ::placeholder {
        color: #fff;
      }
    }
    .users {
      height: 100vh;
      padding-right: 2vw;
      overflow: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      gap: 2vw;
    }

    ::-webkit-scrollbar {
      width: 0.8vw;
    }
    ::-webkit-scrollbar-track {
      background-color: #007aff;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #fff;
      border-radius: 2vw;
      border: none;
    }
  }
`;
