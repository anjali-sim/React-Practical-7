import React from "react";
import PropTypes from "prop-types";
import { InputComponentStyle } from "@src/components/Input/index";

const InputComponent = ({ type, id, name, placeholder, ...rest }) => {
  return (
    <InputComponentStyle
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      {...rest}
    />
  );
};

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputComponent;
