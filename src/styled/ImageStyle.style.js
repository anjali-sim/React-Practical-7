import styled from "styled-components";

// Style for the image
const ImageStyle = styled.img`
  width: 500px;
  height: 500px;

  // Media Queries
  @media (max-width: 950px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 850px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 700px) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export default ImageStyle;
