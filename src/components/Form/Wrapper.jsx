import React from "react";
import Heading from "../Header/Heading";
import Input from "../Input/Input";
import FileUpload from "../FileUpload/FileUpload";
import FormWrapper from "../../styled/FormWrapper.style";

const Wrapper = () => {
  return (
    <>
      <FormWrapper>
        <Heading />
        <FileUpload />
        <Input />
      </FormWrapper>
    </>
  );
};

export default Wrapper;
