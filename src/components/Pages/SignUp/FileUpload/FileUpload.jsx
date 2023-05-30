import React from "react";
import PhotoFileStyle from "./PhotoFileStyle.style";
import LabelPhotoStyle from "./LabelPhotoStyle.style";
import ErrorStyle from "../../../../styled/ErrorStyle.style";

const FileUpload = ({ label, id, name, setImage, onBlur, error }) => {
  return (
    <>
      <LabelPhotoStyle htmlFor={id}>{label}</LabelPhotoStyle>
      <PhotoFileStyle
        type="file"
        id={id}
        name={name}
        accept=".jpg, .jpeg, .png"
        onChange={(event) => {
          setImage(event);
        }}
        onBlur={onBlur}
      ></PhotoFileStyle>
      {onBlur && error && <ErrorStyle>{error}</ErrorStyle>}
    </>
  );
};

export default FileUpload;
