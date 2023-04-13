import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const ResetPassword = () => {
  return (
    <div>
      <Main>
        <Card
          tittle="Reset Password"
          Buttontittle="Reset"
          InputTittle="Email"
          sign={false}
          request={false}
          onClick={() => {
            console.log("I am working");
          }}
          text="Changed your mind about reseting"
          route="Go back to home"
          path="/"
        />
      </Main>
    </div>
  );
};

export default ResetPassword;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 270px);
  width: 100%;
  justify-content: center;
  align-items: center;
`;
