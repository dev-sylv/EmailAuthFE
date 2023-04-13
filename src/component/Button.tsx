import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <div>
      <Main>
        <Text>Button</Text>
      </Main>
    </div>
  );
};

export default Button;

const Main = styled.div<{ bg: string; cc: string }>`
  width: 120px;
  height: 80px;
  background-color: ${({ bg }) => bg};
  color: ${({ cc }) => cc};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 360ms;

  :hover {
    cursor: pointer;
    transform: scale(0.97);
  }
`;
const Text = styled.div`
  font-weight: bold;
`;
