import React from "react";
import styled from "styled-components";
import { iCard } from "../types/interfaces/Interfaces";
import InputData from "./Input";

const Card: React.FC<iCard> = ({ tittle }) => {
  return (
    <div>
      <Main>
        <Text>{tittle}</Text>
        <InputData tittle="Name" />
        <InputData tittle="Email" />
        <InputData tittle="Password" />
      </Main>
    </div>
  );
};

export default Card;

const Main = styled.div`
  width: 400px;
  min-height: 600px;
  border-radius: 10px;
  border-color: silver;
  background-color: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  margin-top: 40px;
  font-weight: 500px;
  text-transform: uppercase;
  font-size: 40px;
`;
