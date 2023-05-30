import React from "react";
import Heading from "../Header/Heading";
import Input from "../Input/Input";
import FileUpload from "../FileUpload/FileUpload";
import FormWrapper from "../../../../styled/FormWrapper.style";

const Wrapper = () => {
  return (
    <div>
        <FormWrapper>
      <Heading />
      <FileUpload />
      <Input />
      </FormWrapper>
    </div>
  );
};

export default Wrapper;
