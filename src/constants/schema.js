import * as Yup from "yup";
import VALIDATION_MESSAGES from "./validationMessages";

// variable for the validation schema for formik
const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .required(VALIDATION_MESSAGES.name.required)
    .min(5, VALIDATION_MESSAGES.name.min),
  email: Yup.string()
    .email(VALIDATION_MESSAGES.email.email)
    .required(VALIDATION_MESSAGES.email.required),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, VALIDATION_MESSAGES.phone.matches)
    .required(VALIDATION_MESSAGES.phone.required),
  password: Yup.string()
    .required(VALIDATION_MESSAGES.password.required)
    .min(8, VALIDATION_MESSAGES.password.min)
    .matches(/[a-z]/, VALIDATION_MESSAGES.password.matches)
    .matches(/[A-Z]/, VALIDATION_MESSAGES.password.matches)
    .matches(/[0-9]/, VALIDATION_MESSAGES.password.matches)
    .matches(/[^\w]/, VALIDATION_MESSAGES.password.matches),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], VALIDATION_MESSAGES.repassword.oneOf)
    .required(VALIDATION_MESSAGES.repassword.required),
  image: Yup.mixed()
    .test("fileSize", VALIDATION_MESSAGES.image.fileSize, (value) => {
      if (value) {
        return value.size <= 2 * 1024 * 1024; // size 2MB in bytes
      }
      return true;
    })
    .test("fileType", VALIDATION_MESSAGES.image.fileType, (value) => {
      if (value) {
        return ["image/jpeg", "image/png"].includes(value.type);
      }
      return true;
    }),
});

export default VALIDATION_SCHEMA;
