import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../reducers/userSlice";
import { logout } from "../../reducers/authSlice";
import { useNavigate } from "react-router-dom";
import {
  HomeButton,
  HomeWrapper,
  HomeParagraph,
  HomeNav,
  HomeSuccessMsg,
  HomeBold,
  Wrapper,
  ProfileStyle
} from "../../styled/HomeButton.style";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  console.log(userData.image);

  return (
    <>
      <HomeNav>
        <HomeButton onClick={handleLogout}>Logout</HomeButton>
      </HomeNav>

      <Wrapper>
        <HomeWrapper>
            
          <ProfileStyle src={userData.image} alt="Profile Picture" />
          <HomeParagraph>
            <HomeSuccessMsg>Successfully Registered</HomeSuccessMsg>
            Hello <HomeBold>{userData.name}</HomeBold>
          </HomeParagraph>
          <HomeParagraph>
            You are registered with the email id - {userData.email}
          </HomeParagraph>
          <HomeParagraph>and phone number - {userData.phone}</HomeParagraph>
        </HomeWrapper>
      </Wrapper>
    </>
  );
};

export default Home;
