import React from "react";
import styled from "styled-components";
import Card from "../../component/Card";

const ResetPassword = () => {
  return (
    <div>
      <Main>
        <Card
          tittle="Reset Password"
          Buttontittle="Register"
          onClick={() => {
            console.log("I am working");
          }}
        />
      </Main>
    </div>
  );
};

export default ResetPassword;

const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
