import React from "react";
import { StyledContainer } from "./Component/Container.styled";
import { Button } from "./Component/Button.styled";

function SignUp() {
  return (
    <StyledContainer>
      <form>
        <h2>Sign Up</h2>
        <label htmlFor="signUp">USERNAME</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="signUp">PASSWORD</label>
        <input type="text" placeholder="Password" />
        <Button>Sign Up</Button>
      </form>
    </StyledContainer>
  );
}

export default SignUp;
