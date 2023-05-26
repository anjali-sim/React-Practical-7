import React from "react";
import PhotoFileStyle from "../styled/PhotoFileStyle.style";
import LabelPhotoStyle from "../styled/LabelPhotoStyle.style";

const InputFile = () => {
  return (
    <div>
      <LabelPhotoStyle>Photo +</LabelPhotoStyle>
      <PhotoFileStyle type="file"></PhotoFileStyle>
    </div>
  );
};

export default InputFile;
