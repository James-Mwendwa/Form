import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.login ? "#f28636" : "#b21803")};
  color: #fff;
  margin-top: 20px;
  border: none;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
`;
