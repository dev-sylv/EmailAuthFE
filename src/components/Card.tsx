import React from "react";
import styled from "styled-components";
import { iCard } from "../types/interfaces/Interfaces";
import InputData from "./Input";
import Button from "./Button";

const Card: React.FC<iCard> = ({
  tittle,
  Buttontittle,
  onClick,
  InputTittle,
  InputTittle1,
  InputTittle2,
  sign,
  request,
}) => {
  return (
    <div>
      <Main>
        <Text>{tittle}</Text>
        <InputData
          InputTittle={InputTittle}
          InputTittle1={InputTittle1}
          InputTittle2={InputTittle2}
          sign={sign}
          request={request}
        />

        <Button
          Buttontittle={Buttontittle}
          bg="purple"
          cc="white"
          onClick={onClick}
        />
      </Main>
    </div>
  );
};

export default Card;

const Main = styled.div`
  width: 400px;
  min-height: 400px;
  border-radius: 10px;
  border-color: silver;
  background-color: transparent;
  border: 2px solid purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border: 2px solid black;
  }
`;
const Text = styled.div`
  margin-top: 40px;
  font-weight: 500px;
  text-transform: uppercase;
  font-size: 40px;
`;
