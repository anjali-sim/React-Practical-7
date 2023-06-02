import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setUserData } from "@src/reducers/userSlice";
import { logout } from "@src/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import {
  HomeButton,
  HomeWrapper,
  HomeParagraph,
  HomeBold,
  HomeSuccessMsg,
  Navigation,
  ProfilePicture,
} from "@src/Pages/Home/index";
import WrapperStyle from "@src/styled/WrapperStyle.style";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signup");
    }
  }, []);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      dispatch(setUserData(JSON.parse(storedUserData)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!userData) {
    } else {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setUserData(""));
    localStorage.removeItem("userData");
    localStorage.removeItem("isAuthenticated");
    navigate("/signup");
  };

  // Check if userData is available before rendering
  if (!userData) {
    return null;
  }

  return (
    <>
      <Navigation>
        <HomeButton onClick={() => handleLogout()}>Logout</HomeButton>
      </Navigation>

      <WrapperStyle>
        <HomeWrapper>
          <ProfilePicture src={userData.image} alt="Profile Picture" />
          <HomeSuccessMsg>Successfully Registered</HomeSuccessMsg>
          Hello,
          <HomeBold>{userData.name}</HomeBold>
          <HomeParagraph>
            You are registered with the email id - {userData.email}
          </HomeParagraph>
          <HomeParagraph>and phone number - {userData.phone}</HomeParagraph>
        </HomeWrapper>
      </WrapperStyle>
    </>
  );
};

export default Home;
