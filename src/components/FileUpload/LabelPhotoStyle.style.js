import styled from "styled-components";

// Style for the label of the photo
const LabelPhotoStyle = styled.label`
  font-size: 15px;
  color: black;
  margin-left: 175px;

  // Media Queries
  @media (max-width: 700px) {
    margin-left: 140px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    margin-left: 115px;
  }
`;

export default LabelPhotoStyle;
