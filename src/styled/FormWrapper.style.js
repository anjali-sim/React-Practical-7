import styled from "styled-components";

// Style for wrapping all the form inputs
const FormWrapper = styled.div`
  position: relative;
  width: 400px;

  // Media Queries
  @media (max-width: 750px) {
    width: 370px;
  }

  @media (max-width: 700px) {
    width: 320px;
  }

  @media (max-width: 650px) {
    width: 300px;
  }

  @media (max-width: 600px) {
    width: 270px;
  }
`;

export default FormWrapper;
