import styled from "styled-components";

// Style for the details of the user
export const HomeParagraph = styled.p`
  font-size: 16px;
  color: black;
`;

export const HomeSuccessMsg = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: green;
`;

export const HomeBold = styled.p`
  font-weight: 500;
  text-decoration: underline;
`;

// Style for the profile picture of the user in Home
export const ProfilePicture = styled.img`
  height: 150px;
  width: 150px;
`;

// Style for the logout button
export const HomeButton = styled.button`
  margin-top: 15px;
  height: 40px;
  width: 90px;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-right: 40px;

  &:hover {
    background-color: #333333;
  }
`;

// Style for wrapping the Home components
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  border: 1px solid #404040;
  box-shadow: 5px 10px #bebebe;
  border-radius: 15px;
  padding: 20px;
  width: 25rem;
  height: 25rem;
`;
