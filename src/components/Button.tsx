import React from "react";
import styled from "styled-components";
import { iButton } from "../types/interfaces/Interfaces";

const Button: React.FC<iButton> = ({ Buttontittle, cc, bg, onClick }) => {
  return (
    <div>
      <Main bg={bg} cc={cc} onClick={onClick}>
        <Text>{Buttontittle}</Text>
      </Main>
    </div>
  );
};

export default Button;

const Main = styled.div<{ bg: string; cc: string }>`
  width: 120px;
  height: 50px;
  background-color: ${({ bg }) => bg};
  color: ${({ cc }) => cc};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 360ms;
  margin-top: 20px;

  :hover {
    cursor: pointer;
    transform: scale(0.97);
  }
`;
const Text = styled.div`
  font-weight: bold;
`;
