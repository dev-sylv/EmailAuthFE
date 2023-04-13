import React from "react";
import styled from "styled-components";
import Card from "../../component/Card";

const Register = () => {
  return (
    <div>
      <Main>
        <Card
          tittle="SIGN UP"
          Buttontittle="Register"
          onClick={() => {
            console.log("I am working");
          }}
        />
      </Main>
    </div>
  );
};

export default Register;

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
