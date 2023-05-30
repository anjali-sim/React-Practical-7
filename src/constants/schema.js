import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(15, "Name must be at least 15 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid Indian phone number")
    .required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  image: Yup.mixed()
    .test("fileSize", "File size must be less than 2MB", (value) => {
      if (value) {
        return value.size <= 2 * 1024 * 1024; // 2MB in bytes
      }
      return true;
    })
    .test("fileType", "Only JPG or PNG images are allowed", (value) => {
      if (value) {
        return ["image/jpeg", "image/png"].includes(value.type);
      }
      return true;
    }),
});