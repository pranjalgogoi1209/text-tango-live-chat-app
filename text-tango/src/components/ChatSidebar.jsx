import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

export default function ChatSidebar() {
  return (
    <Wrapper>
      <div className="ChatSidebar">
        {/* header */}
        <header>
          <div>
            <h1>TEXT-TANGO</h1>
          </div>
          <div className="header-icons">
            <IconButton>
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
        <div className="users">user1</div>
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
      .header-icons {
        display: flex;
        svg {
          color: #fff;
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
  }
`;
