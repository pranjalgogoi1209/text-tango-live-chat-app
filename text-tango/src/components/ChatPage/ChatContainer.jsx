import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function ChatContainer() {
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
