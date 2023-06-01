import React from "react";
import PhotoFileStyle from "./PhotoFileStyle.style";
import LabelPhotoStyle from "./LabelPhotoStyle.style";
import ErrorStyle from "@src/styled/ErrorStyle.style";
import PropTypes from "prop-types";
import { ACCEPTED_FILE_FORMATS } from "@src/constants/fileUpload";

const FileUpload = ({ label, id, name, setImage, onBlur, error }) => {
  return (
    <>
      <LabelPhotoStyle htmlFor={id}>{label}</LabelPhotoStyle>
      <PhotoFileStyle
        type="file"
        id={id}
        name={name}
        accept={ACCEPTED_FILE_FORMATS}
        onChange={(event) => {
          setImage(event);
        }}
        onBlur={onBlur}
      ></PhotoFileStyle>
      {error && <ErrorStyle>{error}</ErrorStyle>}
    </>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

export default FileUpload;
