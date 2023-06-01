import styled from "styled-components";

// Style for the input fields
const InputComponentStyle = styled.input.attrs()`
  background-color: #faebd8 !important;
  border: 1px solid #faebd8;
  color: black;
  margin-top: 8px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  height: 30px;
  border-color: transparent;

  transition: 0.15s;
  text-align: left;

  &:focus {
    outline-color: #9f8170;
    background-color: #faebd8;
  }

  // Media Queries
  @media (max-width: 600px) {
    height: 25px;
  }
`;

export default InputComponentStyle;
