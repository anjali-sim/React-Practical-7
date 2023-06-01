import React from "react";
import { SubmitButtonStyle } from "./ButtonStyle.style";
import PropTypes from "prop-types";

const Button = ({type}) => {
  return <SubmitButtonStyle type={type}>Submit</SubmitButtonStyle>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
