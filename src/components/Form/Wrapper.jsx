import React from "react";
import Heading from "../Header/Heading";
import Input from "../Input/Input";
import InputFile from "../InputFile/InputFile";
import FormWrapper from "../../styled/FormWrapper.style";

const Wrapper = () => {
  return (
    <div>
        <FormWrapper>
      <Heading />
      <InputFile />
      <Input />
      </FormWrapper>
    </div>
  );
};

export default Wrapper;
