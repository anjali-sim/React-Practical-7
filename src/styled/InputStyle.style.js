import styled from "styled-components";

const InputStyle = styled.input.attrs()`
background: #faebd8;
border: 1px solid #faebd8;
  color: black;
//   cursor: pointer;
  margin-top: 8px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  height: 30px;
  border-color: transparent;
  outline-color: #faebd8;
  transition: 0.15s;
  text-align: left;

  &:focus {
    outline-color:#9F8170;
`;

export default InputStyle;