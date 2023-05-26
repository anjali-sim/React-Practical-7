import React from "react";
import {
  SubmitButtonStyle,
  ResetButtonStyle,
} from "../../styled/ButtonStyle.style";
import { useFormik } from "formik";
import { validationSchema } from "../../constants/schema";

const Button = () => {

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //     repassword: "",
  //     image: null
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <>
      <SubmitButtonStyle type="submit">Submit</SubmitButtonStyle>

      <ResetButtonStyle type="reset"  >Reset</ResetButtonStyle>
    </>
  );
};

export default Button;
