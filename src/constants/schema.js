import * as Yup from "yup";
import ERRORMESSAGES from "./errorMessages";

const VALIDATIONSCHEMA = Yup.object().shape({
  name: Yup.string().required(ERRORMESSAGES.name.required).min(5, ERRORMESSAGES.name.min),
  email: Yup.string().email(ERRORMESSAGES.email.email).required(ERRORMESSAGES.email.required),
  phone: Yup.string().matches(/^[0-9]{10}$/, ERRORMESSAGES.phone.matches).required(ERRORMESSAGES.phone.required),
  password: Yup.string()
    .required(ERRORMESSAGES.password.required)
    .min(8, ERRORMESSAGES.password.min)
    .matches(/[a-z]/, ERRORMESSAGES.password.matches.lowercase)
    .matches(/[A-Z]/, ERRORMESSAGES.password.matches.uppercase)
    .matches(/[0-9]/, ERRORMESSAGES.password.matches.number)
    .matches(/[^\w]/, ERRORMESSAGES.password.matches.symbol),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], ERRORMESSAGES.repassword.oneOf)
    .required(ERRORMESSAGES.repassword.required),
  image: Yup.mixed()
    .test("fileSize", ERRORMESSAGES.image.fileSize, (value) => {
      if (value) {
        return value.size <= 2 * 1024 * 1024; // 2MB in bytes
      }
      return true;
    })
    .test("fileType", ERRORMESSAGES.image.fileType, (value) => {
      if (value) {
        return ["image/jpeg", "image/png"].includes(value.type);
      }
      return true;
    }),
});

export default VALIDATIONSCHEMA;