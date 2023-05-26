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


    //   Yup
    //   .string()
    //   .required("Image is required")
    //   .test("is-base64", "Invalid image format", (value) => {
    //     if (!value) {
    //       return true;
    //     }
  
    //     const regex = /^data:image\/(png|jpe?g);base64,/i;
  
    //     return regex.test(value);
    //   })
    //   .test("is-size-valid", "Image size too large", (value) => {
    //     if (!value) {
    //       return true;
    //     }
  
    //     const bytes = Math.ceil(
    //       (value.length - "data:image/png;base64,".length) * 0.75
    //     );
    //     const MAX_IMAGE_SIZE = 2 * 1024 * 1024;
    //     return bytes <= MAX_IMAGE_SIZE;
    //   }),


  });