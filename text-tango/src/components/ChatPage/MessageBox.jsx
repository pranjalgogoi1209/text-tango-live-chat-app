import React from "react";
import styled from "styled-components";

export default function MessageBox() {
  return (
    <Wrapper>
      <div className="MessageBox">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam error
        repudiandae necessitatibus.
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .MessageBox {
    padding: 1vw;
    width: 30%;
    border-radius: 1vw;
    background-color: #007aff;
    color: #fff;
  }
`;
