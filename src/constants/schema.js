import * as Yup from "yup";
import { VALIDATIONMESSAGES } from "./validationMessages";

// variable for the validation schema for formik
const VALIDATIONSCHEMA = Yup.object().shape({
  name: Yup.string()
    .required(VALIDATIONMESSAGES.name.required)
    .min(5, VALIDATIONMESSAGES.name.min),
  email: Yup.string()
    .email(VALIDATIONMESSAGES.email.email)
    .required(VALIDATIONMESSAGES.email.required),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, VALIDATIONMESSAGES.phone.matches)
    .required(VALIDATIONMESSAGES.phone.required),
  password: Yup.string()
    .required(VALIDATIONMESSAGES.password.required)
    .min(8, VALIDATIONMESSAGES.password.min)
    .matches(/[a-z]/, VALIDATIONMESSAGES.password.matches)
    .matches(/[A-Z]/, VALIDATIONMESSAGES.password.matches)
    .matches(/[0-9]/, VALIDATIONMESSAGES.password.matches)
    .matches(/[^\w]/, VALIDATIONMESSAGES.password.matches),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], VALIDATIONMESSAGES.repassword.oneOf)
    .required(VALIDATIONMESSAGES.repassword.required),
  image: Yup.mixed()
    .test("fileSize", VALIDATIONMESSAGES.image.fileSize, (value) => {
      if (value) {
        return value.size <= 2 * 1024 * 1024; // size 2MB in bytes
      }
      return true;
    })
    .test("fileType", VALIDATIONMESSAGES.image.fileType, (value) => {
      if (value) {
        return ["image/jpeg", "image/png"].includes(value.type);
      }
      return true;
    }),
});

export default VALIDATIONSCHEMA;
