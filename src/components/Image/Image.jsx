import React from "react";
import ImageStyle from "./ImageStyle.style";
import formImage from "../../assets/images/formImage.png";
import ImageWrapper from "./ImageWrapper.style";

const Image = () => {
  return (
    <>
      <ImageWrapper>
        <ImageStyle src={formImage} alt="SignUp image" />
      </ImageWrapper>
    </>
  );
};

export default Image;
