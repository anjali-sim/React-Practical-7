// Defined the error messages
const ERRORMESSAGES = {
    name: {
      required: "Name is required",
      min: "Name must be at least 5 characters",
    },
    email: {
      required: "Email is required",
      email: "Invalid email",
    },
    phone: {
      required: "Phone number is required",
      matches: "Invalid Indian phone number",
    },
    password: {
      required: "Password is required",
      min: "Password must be at least 8 characters",
      matches: {
        lowercase: "Password requires a lowercase letter",
        uppercase: "Password requires an uppercase letter",
        number: "Password requires a number",
        symbol: "Password requires a symbol",
      },
    },
    repassword: {
      required: "Confirm Password is required",
      oneOf: "Passwords must match",
    },
    image: {
      fileSize: "File size must be less than 2MB",
      fileType: "Only JPG or PNG images are allowed",
    },
  };

  export default ERRORMESSAGES;