import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

export default function SetAvatar({ setToggle }) {
  const [avatarSrc, setAvatarSrc] = useState("");
  const handleClick = e => {
    setAvatarSrc(e.target.src);
    setToggle("login");
  };
  console.log(avatarSrc);

  return (
    <Wrapper>
      <div className="SetAvatar">
        <h1>Select Your Avatar</h1>
        <div className="avatar">
          <Avatar
            sx={{ width: "7vw", height: "7vw", cursor: "pointer" }}
            src="https://i.pinimg.com/originals/0e/5d/ec/0e5dec6e94582a268e35780f262c1aba.jpg"
            onClick={e => handleClick(e)}
          ></Avatar>
          <Avatar
            sx={{ width: "7vw", height: "7vw", cursor: "pointer" }}
            src="https://th.bing.com/th/id/OIP.EjBcOYOh1HKl87M_c5XlKwHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            onClick={e => handleClick(e)}
          ></Avatar>
          <Avatar
            sx={{ width: "7vw", height: "7vw", cursor: "pointer" }}
            src="https://th.bing.com/th/id/OIP.twC2CyZ8pah4r9CdLXp0oAHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
            onClick={e => handleClick(e)}
          ></Avatar>
          <Avatar
            sx={{ width: "7vw", height: "7vw", cursor: "pointer" }}
            src="https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-woman-wearing-blue-t-shirt-bandana-avatar-cartoon-character-149672072.jpg"
            onClick={e => handleClick(e)}
          ></Avatar>
          <Avatar
            sx={{ width: "7vw", height: "7vw", cursor: "pointer" }}
            src="https://th.bing.com/th/id/OIP.jQvFbOXuy2ixKbW5zCI1WgHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            onClick={e => handleClick(e)}
          ></Avatar>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  .SetAvatar {
    color: #020c68;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    width: 100%;
    padding: 2vw;
    h1 {
      text-align: center;
    }
    .avatar {
      display: flex;
      gap: 2vw;
      flex-wrap: wrap;
      justify-content: center;
      img {
        border-radius: 50%;
        border: 0.2vw solid #fff;
      }
      img:hover {
        border-color: #020c68;
      }
    }
  }
`;
