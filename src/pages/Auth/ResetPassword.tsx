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
          InputTittle="Enter Old password"
          InputTittle1="Enter New password"
          InputTittle2="Confirm New Password"
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

export default ResetPassword;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 270px);
  width: 100%;
  justify-content: center;
  align-items: center;
`;
