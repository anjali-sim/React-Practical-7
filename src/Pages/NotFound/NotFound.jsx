import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import notFound from "@src/assets/images/notFound.json";
import { NotFoundStyle, ButtonRedirect, Navigation } from "@src/Pages/NotFound/index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const animationContainer = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: notFound,
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  const handleGoToHome = () => {
    navigate("/home");
  };

  const handleGoToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      {isAuthenticated ? (
        <Navigation>
          <ButtonRedirect onClick={handleGoToHome}>Go To Home</ButtonRedirect>
        </Navigation>
      ) : (
        <Navigation>
          <ButtonRedirect onClick={handleGoToSignUp}>Go To SignUp</ButtonRedirect>
        </Navigation>
      )}
      <NotFoundStyle ref={animationContainer} />
    </>
  );
};

export default NotFound;
