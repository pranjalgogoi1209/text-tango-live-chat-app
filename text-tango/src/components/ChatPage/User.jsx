import React from "react";
import styled from "styled-components";

export default function User({ user, setIsAddUser, setSingleUser }) {
  const handleClick = () => {
    setIsAddUser(null);
    setSingleUser(user);
  };
  return (
    <Wrapper>
      <div className="User" onClick={e => handleClick(e)}>
        <div className="left-part">
          <div className="profile-picture">
            <img
              src="https://th.bing.com/th/id/OIP.Z2S76NihaMgTZl0wTxAM2wHaHa?rs=1&pid=ImgDetMain"
              alt="profile-picture"
            />
          </div>
          <div className="name">
            {user && (
              <p>
                <strong>{user.name}</strong>
              </p>
            )}
            {user && (
              <p>
                <small>{user.lastMessage}</small>
              </p>
            )}
          </div>
        </div>

        {user.lastMessage && <div className="msg-count">1</div>}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .User {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-part {
      align-items: center;
      display: flex;
      gap: 2vw;
      .name {
        width: 20vw;
      }
      .profile-picture {
        img {
          border-radius: 50%;
          height: 4vw;
          width: 4vw;
        }
      }
    }
    .msg-count {
      font-size: 1vw;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #fff;
      color: #007aff;
      width: 1.5vw;
      height: 1.5vw;
    }
  }
`;
