import React from "react";
import InputStyle from "../../styled/InputStyle.style";

// import DivStyle from "../../styled/DivStyle.style";
import LabelStyle from "../../styled/LabelStyle.style";


const Input = () => {
  return (
    <div>
      {/* <DivStyle> */}

        <LabelStyle>Name</LabelStyle>
        <InputStyle type="text" id="name" name="name" />
        <LabelStyle>Email</LabelStyle>
        <InputStyle type="email" id="email" name="email" />
        <LabelStyle>PhoneNo</LabelStyle>
        <InputStyle type="text" id="phone" name="phone" />
        <LabelStyle>Password</LabelStyle>
        <InputStyle type="password" id="password" name="password" />
        <LabelStyle>Confirm Password</LabelStyle>
        <InputStyle type="password" id="repassword" name="repassword" />
     
      {/* </DivStyle> */}
    </div>
  );
};

export default Input;
