import React from "react";
import Heading from "@src/components/Header/Heading";
import Input from "@src/components/Input/Input";
import FileUpload from "@src/components/FileUpload/FileUpload";
import FormWrapper from "@src/styled/FormWrapper.style";

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
