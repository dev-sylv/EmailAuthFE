import React, { useState } from "react";
import styled from "styled-components";
import { iInput } from "../types/interfaces/Interfaces";

const InputData: React.FC<iInput> = ({ tittle, sign, request }) => {
  return (
    <div>
      <Field>
        <Form>
          <Input placeholder={tittle} />
          {sign ? <Input placeholder={tittle} /> : null}
          {request ? <Input placeholder={tittle} /> : null}
        </Form>
      </Field>
    </div>
  );
};

export default InputData;

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid grey;
  height: 50px;
  width: 300px;
  padding-left: 10px;
  margin: 5px 0;
`;
