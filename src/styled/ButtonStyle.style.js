import styled from "styled-components";

// Style for the common button
const ButtonStyle = styled.button`
  margin-top: 15px;
  height: 30px;
  width: 70px;
  color: white;
  border: none;
  border-radius: 4px;
`;

// Style for the Submit button
export const SubmitButtonStyle = styled(ButtonStyle)`
  background-color: #20809d;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
    background-color: #1b6c85;
  }
`;

// Style for the Reset button
export const ResetButtonStyle = styled(ButtonStyle)`
  background-color: #d4403a;

  &:hover {
    cursor: pointer;
    background-color: #a8312c;
  }
`;
