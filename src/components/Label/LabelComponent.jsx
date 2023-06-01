import React from "react";
import PropTypes from "prop-types";
import LabelStyle from "./LabelStyle.style";

const LabelComponent = ({ htmlFor, children }) => {
  return <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>;
};

LabelComponent.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LabelComponent;
