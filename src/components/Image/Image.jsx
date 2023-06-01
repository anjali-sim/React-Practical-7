import React from "react";
import { ImageStyle } from "@src/components/Image/index";
import formImage from "@src/assets/images/formImage.png";
import { ImageWrapper } from "@src/components/Image/index";

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
