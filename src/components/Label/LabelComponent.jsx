import React from "react";
import PropTypes from "prop-types";
import LabelStyle from "@src/components/Label/LabelStyle.style";

const LabelComponent = ({ htmlFor, children }) => {
  return <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>;
};

LabelComponent.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LabelComponent;
