import React from "react";
import { useFormik } from "formik";
import InputStyle from "../../styled/InputStyle.style";
import LabelStyle from "../../styled/LabelStyle.style";
import ErrorStyle from "../../styled/ErrorStyle.style";
import { validationSchema } from "../../constants/schema";
import InputFile from "../InputFile/InputFile";
import Button from "../Button/Button";
import { useState } from "react";
import SelectStyle from "../../styled/SelectStyle.style";
import { ResetButtonStyle } from "../../styled/ButtonStyle.style";
import { useDispatch } from "react-redux";
import { setUserData } from "../../reducers/userSlice";
import { useNavigate } from "react-router";

const Input = () => {
  const [selectedImageName, setSelectedImageName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setImage = (e) => {
    const selectedFile = e.currentTarget.files[0];
    formik.setFieldValue("image", selectedFile);
    setSelectedImageName(selectedFile.name);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      repassword: "",
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(setUserData({...values, image: null}));
      console.log(values);
      navigate("/home");
    },
  });

  const handleReset = () => {
    formik.resetForm();
    setSelectedImageName("");
  };

  return (
    <form onSubmit={formik.handleSubmit} onReset={handleReset}>
      <InputFile
        label="+ Photo"
        id="name"
        setImage={setImage}
        onBlur={formik.handleBlur}
        error={
          formik.touched.image && formik.errors.image
            ? formik.errors.image
            : null
        }
      />
      {selectedImageName && <SelectStyle>Selected Image: {selectedImageName}</SelectStyle>}
      <LabelStyle>Name</LabelStyle>
      <InputStyle
        type="text"
        id="name"
        name="name"
        placeholder="Enter the name"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <ErrorStyle>{formik.errors.name}</ErrorStyle>
      ) : null}

      <LabelStyle>Email</LabelStyle>
      <InputStyle
        type="email"
        id="email"
        name="email"
        placeholder="Enter the email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorStyle>{formik.errors.email}</ErrorStyle>
      ) : null}

      <LabelStyle>PhoneNo</LabelStyle>
      <InputStyle
        type="text"
        id="phone"
        name="phone"
        placeholder="Enter the phone no."
        {...formik.getFieldProps("phone")}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <ErrorStyle>{formik.errors.phone}</ErrorStyle>
      ) : null}

      <LabelStyle>Password</LabelStyle>
      <InputStyle
        type="password"
        id="password"
        name="password"
        placeholder="Enter the password"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <ErrorStyle>{formik.errors.password}</ErrorStyle>
      ) : null}

      <LabelStyle>Confirm Password</LabelStyle>
      <InputStyle
        type="password"
        id="repassword"
        name="repassword"
        placeholder="Re-Enter the password"
        {...formik.getFieldProps("repassword")}
      />
      {formik.touched.repassword && formik.errors.repassword ? (
        <ErrorStyle>{formik.errors.repassword}</ErrorStyle>
      ) : null}

      <Button />
      <ResetButtonStyle type="reset">Reset</ResetButtonStyle>
    </form>
  );
};

export default Input;
