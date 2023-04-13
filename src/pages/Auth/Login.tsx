import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const Login = () => {
  return (
    <div>
      <Main>
        <Card
          tittle="SIGN IN"
          Buttontittle="Login"
          InputTittle="Email"
          InputTittle1="Password"
          sign={true}
          request={false}
          onClick={() => {
            console.log("I am working");
          }}
        />
      </Main>
    </div>
  );
};

export default Login;

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
