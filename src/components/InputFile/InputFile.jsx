import React from "react";
import PhotoFileStyle from "../../styled/PhotoFileStyle.style";
import LabelPhotoStyle from "../../styled/LabelPhotoStyle.style";

import { useFormik } from "formik";
import ErrorStyle from "../../styled/ErrorStyle.style";
import { validationSchema } from "../../constants/schema";

const InputFile = ({label,id, setImage,onBlur,error}) => {
  // console.log(validationSchema);
  // const formik = useFormik({
  //   initialValues: {
  //     image: null,
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  // console.log(formik.errors.image);

  return (
    <>
      <LabelPhotoStyle htmlFor={id}>{label}</LabelPhotoStyle>
      <PhotoFileStyle
        type="file"
        id={id}
        onChange={(event) => {
          setImage(event)
        }}
        onBlur={onBlur}
      ></PhotoFileStyle>
      {/* {&& ( */}
        <ErrorStyle>{error}</ErrorStyle>
      {/* )} */}
    </>
  );
};

export default InputFile;



// import React from "react";
// import PhotoFileStyle from "../../styled/PhotoFileStyle.style";
// import LabelPhotoStyle from "../../styled/LabelPhotoStyle.style";
// import ErrorStyle from "../../styled/ErrorStyle.style";
// import { useField, ErrorMessage } from "formik";

// const InputFile = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <>
//       <LabelPhotoStyle htmlFor={props.id || props.name}>{label}</LabelPhotoStyle>
//       <PhotoFileStyle {...field} {...props} />
//       {meta.touched && meta.error && <ErrorStyle>{meta.error}</ErrorStyle>}
//     </>
//   );
// };

// export default InputFile;
