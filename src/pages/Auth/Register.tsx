import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const Register = () => {
  return (
    <div>
      <Main>
        <Card
          tittle="SIGN UP"
          Buttontittle="Register"
          InputTittle="Email"
          InputTittle1="Password"
          InputTittle2="Confirm Password"
          sign={true}
          request={true}
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
