import React from "react";
import ImageStyle from "../../styled/ImageStyle.style";
import formImage from "../../assets/images/formImage.png";
import ImageWrapper from "../../styled/ImageWrapper.style";

const Image = () => {
  return (
    <ImageWrapper>
      <ImageStyle src={formImage} alt="SignUp image" />
    </ImageWrapper>
  );
};

export default Image;
