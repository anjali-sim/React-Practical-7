import React from "react";
import PropTypes from "prop-types";
import LabelStyle from "@src/components/Label/LabelStyle.style";

const Label = ({ htmlFor, children }) => {
  return <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>;
};

Label.defaultProps = {
  children: null,
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
