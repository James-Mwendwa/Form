import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  background-color: ${(props) => (props.login ? "#014c78" : "#35666d")};
  padding: 40px 0;
  margin: 125px 400px;
  width: 500px;
  border-radius: 10px;
  color: #fff;

  form {
    display: flex;
    flex-direction: column;
    outline-width: none;
  }

  label {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 5px;
  }

  input {
    margin-top: 10px;
    outline-width: none;
    padding: 7px;
    border: none;
  }

  h3 {
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
  }

  a {
    color: #f26e11;
    text-decoration: none;
    margin-left: 5px;
  }
`;
