import * as Yup from "yup";
import * as validationMessages from "./validationMessages";

// variable for initial values to use in formik
export const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  repassword: "",
  image: null,
};

// variable for the validation schema in formik
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(validationMessages.NAME_REQUIRED)
    .min(5, validationMessages.NAME_MIN_LENGTH),
  email: Yup.string()
    .email(validationMessages.EMAIL_INVALID)
    .required(validationMessages.EMAIL_REQUIRED),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, validationMessages.PHONE_INVALID)
    .required(validationMessages.PHONE_REQUIRED),
  password: Yup.string()
    .required(validationMessages.PASSWORD_REQUIRED)
    .min(8, validationMessages.PASSWORD_MIN_LENGTH)
    .matches(/[a-z]/, validationMessages.PASSWORD_LOWERCASE)
    .matches(/[A-Z]/, validationMessages.PASSWORD_UPPERCASE)
    .matches(/[0-9]/, validationMessages.PASSWORD_NUMBER)
    .matches(/[^\w]/, validationMessages.PASSWORD_SYMBOL),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], validationMessages.PASSWORDS_MATCH)
    .required(validationMessages.CONFIRM_PASSWORD_REQUIRED),
  image: Yup.mixed()
    .test("fileSize", validationMessages.IMAGE_SIZE_LIMIT, (value) => {
      if (value) {
        return value.size <= 2 * 1024 * 1024; // 2MB in bytes
      }
      return true;
    })
    .test("fileType", validationMessages.IMAGE_TYPE_LIMIT, (value) => {
      if (value) {
        return ["image/jpeg", "image/png"].includes(value.type);
      }
      return true;
    }),
});
