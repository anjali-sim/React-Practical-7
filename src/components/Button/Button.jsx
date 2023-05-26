import React from "react";
import {
  SubmitButtonStyle,
  ResetButtonStyle,
} from "../../styled/ButtonStyle.style";

const Button = () => {
  return (
    <>
      <SubmitButtonStyle type="submit">Submit</SubmitButtonStyle>
      <ResetButtonStyle type="submit">Reset</ResetButtonStyle>
    </>
  );
};

export default Button;
