import styled from "styled-components";

// Style for the wrapping the image in a division
const ImageWrapper = styled.div`
  margin-left: 25px;

  // Media Queries
  @media (max-width: 850px) {
    margin-left: 20px;
  }
  @media (max-width: 850px) {
    margin-left: 10px;
  }
`;

export default ImageWrapper;
