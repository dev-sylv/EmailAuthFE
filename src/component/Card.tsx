import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <div>
      <Main>
        <Text>Text</Text>
        <Field>
          <Form>
            <Input placeholder="Name" />
          </Form>
        </Field>
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
const Field = styled.div`
  display: flex;
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
`;
