import React from "react";
import {
  SubmitButtonStyle,
  ResetButtonStyle,
} from "../../styled/ButtonStyle.style";

const Button = () => {

  return (
    <>
      <SubmitButtonStyle type="submit">Submit</SubmitButtonStyle>

      <ResetButtonStyle type="reset"  >Reset</ResetButtonStyle>
    </>
  );
};

export default Button;
