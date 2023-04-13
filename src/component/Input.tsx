import React, { useState } from "react";
import styled from "styled-components";
import { iInput } from "../types/interfaces/Interfaces";

const InputData: React.FC<iInput> = ({
  tittle,
  tittle1,
  tittle2,
  sign,
  request,
}) => {
  return (
    <div>
      <Field>
        <Form>
          <Input placeholder={tittle} />
          {sign ? <Input placeholder={tittle1} /> : null}
          {request ? <Input placeholder={tittle2} /> : null}
        </Form>
      </Field>
    </div>
  );
};

export default InputData;

const Field = styled.div`
  display: flex;

  flex-direction: column;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid grey;
  height: 50px;
  width: 300px;
  padding-left: 10px;
  margin: 5px 0;
`;
