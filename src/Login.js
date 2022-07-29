import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "./Component/Container.styled";
import { Button } from "./Component/Button.styled";

function Login() {
  return (
    <StyledContainer login>
      <form>
        <h2>Login</h2>
        <label htmlFor="Login">USERNAME</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="Login">PASSWORD</label>
        <input type="text" placeholder="Password" />
        <Button login>Login</Button>
        <h3>
          Not a Member? <Link to="/signUp">Sign Up</Link>
        </h3>
      </form>
    </StyledContainer>
  );
}

export default Login;
