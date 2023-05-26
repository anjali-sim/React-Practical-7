import React from "react";
import Heading from "../Header/Heading";
import Input from "../Input/Input";
import Button from "../Button/Button";
import InputFile from "../InputFile/InputFile";
import FormWrapper from "../../styled/FormWrapper.style";

const Wrapper = () => {
  return (
    <div>
        <FormWrapper>
      <Heading />
      <InputFile />
      <Input />
      {/* <Button /> */}
      </FormWrapper>
    </div>
  );
};

export default Wrapper;
