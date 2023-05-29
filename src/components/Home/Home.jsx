import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, selectUserData } from "../../reducers/userSlice";
import { logout } from "../../reducers/authSlice";
import { useNavigate } from "react-router-dom";
import {
  HomeButton,
  HomeWrapper,
  HomeParagraph,
  HomeNav
} from "../../styled/HomeButton.style";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/SignUp");
  };

  return (
    <>
      <HomeNav>
        <HomeButton onClick={handleLogout}>Logout</HomeButton>
      </HomeNav>
      
      <HomeWrapper>
      <div>
        <img src={userData.image} alt="Profile Picture" />
      </div>
        <HomeParagraph>
            <HomeSuccessMsg>Successfully Registered</HomeSuccessMsg>
          Hello {userData.name}, you are registered with the email id -{" "}
          {userData.email} and phone number - {userData.phone}
        </HomeParagraph>
      </HomeWrapper>
    </>
  );
};

export default Home;
