import React from "react";
import PhotoFileStyle from "../styled/PhotoFileStyle.style";
import LabelPhotoStyle from "../styled/LabelPhotoStyle.style";

const InputFile = () => {
  return (
    <>
      <LabelPhotoStyle htmlFor="file">Photo +</LabelPhotoStyle>
      <PhotoFileStyle type="file" id="file"></PhotoFileStyle>
    </>
  );
};

export default InputFile;
