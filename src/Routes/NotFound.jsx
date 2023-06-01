import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import notFound from "@src/assets/images/notFound.json";
import LottieDiv from "./LottieDiv.style";

const NotFound = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      // renderer: "svg",
      animationData: notFound,
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return <LottieDiv ref={animationContainer} />;
};

export default NotFound;
