import styled from "styled-components";

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

export const HomeParagraph = styled.p`
font-size: 16px;
color: black;
`;

export const HomeSuccessMsg = styled.p`
font-size: 20px;
font-weight: 500;
color: green;
`;

export const HomeWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: self-start;
border: 1px solid #404040;
padding:20px;
width:20rem;
height:20rem;
`;

export const HomeNav = styled.div`
height: 70px;
// background-color: #9ba45b;
background-color: #9cc3c9;
display: flex;
justify-content: flex-end;
margin-bottom: 50px;
`;

export const HomeBold = styled.p`
font-weight: 500;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:10px;
`;

export const ProfileStyle = styled.img`
height: 100px;
width: 100px;
`;