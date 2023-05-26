import styled from "styled-components";

const ButtonStyle = styled.button`
  margin-top: 15px;
  height: 30px;
  width: 70px;
  color: white;
  border: none;
  border-radius: 4px;
`;

export const SubmitButtonStyle = styled(ButtonStyle)`
  background-color: #20809d;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const ResetButtonStyle = styled(ButtonStyle)`
  background-color: #D4403A;

  &:hover {
    cursor: pointer;
  }
`;
