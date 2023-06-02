import React from "react";
import { Heading } from "@src/components/Heading/index";
import { Input } from "@src/components/Input/index";
import { FileUpload } from "@src/components/FileUpload/index";
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
