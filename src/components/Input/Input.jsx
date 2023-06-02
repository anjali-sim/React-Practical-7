import React from "react";
import { useFormik } from "formik";
import {
  Label,
  InputComponent,
  SelectStyle,
} from "@src/components/Input/index";
import ErrorStyle from "@src/styled/ErrorStyle.style";
import { validationSchema, initialValues } from "@src/constants/schema";
import { FileUpload } from "@src/components/FileUpload/index";
import Button from "@src/components/Button/index";
import { useState } from "react";
import { ResetButtonStyle } from "@src/components/Button/ButtonStyle.style";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "@src/reducers/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "@src/reducers/authSlice";

const Input = () => {
  const [selectedImageName, setSelectedImageName] = useState("");
  const [selectedImageBase64, setSelectedImageBase64] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) return <Navigate to={"/home"} />;

  const setImage = (e) => {
    const selectedFile = e.currentTarget.files[0];
    formik.setFieldValue("image", selectedFile);
    setSelectedImageName(selectedFile.name);

    // Convert image to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImageBase64(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { password, repassword, ...otherValues } = values;
      dispatch(setUserData({ ...otherValues, image: selectedImageBase64 }));
      dispatch(login());
      navigate("/home");
    },
  });

  const handleReset = () => {
    formik.resetForm();
    setSelectedImageName("");
    setSelectedImageBase64("");
  };

  const onChange = (event) => {
    setImage(event);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} onReset={handleReset}>
        <FileUpload
          label="+ Photo"
          id="image"
          name="image"
          onChange={onChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.image && formik.errors.image
              ? formik.errors.image
              : null
          }
        />
        {selectedImageName && (
          <SelectStyle>Selected Image: {selectedImageName}</SelectStyle>
        )}

        <Label htmlFor="name">Name</Label>
        <InputComponent
          type="text"
          id="name"
          name="name"
          placeholder="Enter the name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorStyle>{formik.errors.name}</ErrorStyle>
        ) : null}

        <Label htmlFor="email">Email</Label>
        <InputComponent
          type="email"
          id="email"
          name="email"
          placeholder="Enter the email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorStyle>{formik.errors.email}</ErrorStyle>
        ) : null}

        <Label htmlFor="phone">PhoneNo</Label>
        <InputComponent
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter the phone no."
          {...formik.getFieldProps("phone")}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <ErrorStyle>{formik.errors.phone}</ErrorStyle>
        ) : null}

        <Label htmlFor="password">Password</Label>
        <InputComponent
          type="password"
          id="password"
          name="password"
          placeholder="Enter the password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorStyle>{formik.errors.password}</ErrorStyle>
        ) : null}

        <Label htmlFor="repassword">Confirm Password</Label>
        <InputComponent
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
    </>
  );
};

export default Input;
