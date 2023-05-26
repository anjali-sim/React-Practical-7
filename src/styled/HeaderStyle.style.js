import styled from "styled-components";

// Style for the heading
const HeaderStyle = styled.h1`
  font-size: 45px;
  font-weight: bold;

  // Media Queries
  @media (max-width: 950px) {
    font-size: 40px;
  }

  @media (max-width: 850px) {
    font-size: 35px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
  }

  @media (max-width: 700px) {
    font-size: 26px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export default HeaderStyle;
