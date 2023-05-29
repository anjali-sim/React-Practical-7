import React from "react";
import PhotoFileStyle from "../../styled/PhotoFileStyle.style";
import LabelPhotoStyle from "../../styled/LabelPhotoStyle.style";
import ErrorStyle from "../../styled/ErrorStyle.style";

const InputFile = ({ label, id, setImage, onBlur, error }) => {
  return (
    <>
      <LabelPhotoStyle htmlFor={id}>{label}</LabelPhotoStyle>
      <PhotoFileStyle
        type="file"
        id={id}
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

export default InputFile;
