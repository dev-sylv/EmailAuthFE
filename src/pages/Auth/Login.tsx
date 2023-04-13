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
          text="Don't have an account"
          route="Create One Now"
          path="/"
        />
      </Main>
    </div>
  );
};

export default Login;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 270px);
  width: 100%;
  justify-content: center;
  align-items: center;
`;
