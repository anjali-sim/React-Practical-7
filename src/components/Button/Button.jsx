import React from "react";
import PropTypes from "prop-types";
import { SubmitButtonStyle } from "@src/components/Button/ButtonStyle.style";

const Button = ({ type }) => {
  return <SubmitButtonStyle type={type}>Submit</SubmitButtonStyle>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
