import React from "react";
import { useFormik } from "formik";
import InputStyle from "../../styled/InputStyle.style";
import LabelStyle from "../../styled/LabelStyle.style";
import ErrorStyle from "../../styled/ErrorStyle.style";
import { validationSchema } from "../../constants/schema";
import InputFile from "../InputFile/InputFile";
import Button from "../Button/Button";

const Input = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      repassword: "",
      image:null
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const setImage = (e) =>{
    formik.setFieldValue("image", e.currentTarget.files[0]);
  }
  return (
    <form onSubmit={formik.handleSubmit} reset={formik.resetForm}>
      <InputFile label="+ Photo" id="name" setImage={setImage} onBlur={formik.handleBlur} error={formik.touched.image && formik.errors.image ? formik.errors.image : null }/>
      <LabelStyle>Name</LabelStyle>
      <InputStyle
        type="text"
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <ErrorStyle>{formik.errors.name}</ErrorStyle>
      ) : null}

      <LabelStyle>Email</LabelStyle>
      <InputStyle
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorStyle>{formik.errors.email}</ErrorStyle>
      ) : null}

      <LabelStyle>PhoneNo</LabelStyle>
      <InputStyle
        type="text"
        id="phone"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <ErrorStyle>{formik.errors.phone}</ErrorStyle>
      ) : null}

      <LabelStyle>Password</LabelStyle>
      <InputStyle
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <ErrorStyle>{formik.errors.password}</ErrorStyle>
      ) : null}

      <LabelStyle>Confirm Password</LabelStyle>
      <InputStyle
        type="password"
        id="repassword"
        name="repassword"
        value={formik.values.repassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.repassword && formik.errors.repassword ? (
        <ErrorStyle>{formik.errors.repassword}</ErrorStyle>
      ) : null}
     <Button/>
    </form>
    
  );
};

export default Input;
