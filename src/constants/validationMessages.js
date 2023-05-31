export const VALIDATIONMESSAGES = {
  name: {
    required: "Name is required",
    min: "Name must be at least 5 characters",
  },
  email: {
    email: "Invalid email",
    required: "Email is required",
  },
  phone: {
    matches: "Invalid Indian phone number",
    required: "Phone number is required",
  },
  password: {
    required: "Password is required",
    min: "Password must be at least 8 characters.",
    matches: "Password requires a lowercase letter.",
    matches: "Password requires an uppercase letter.",
    matches: "Password requires a number.",
    matches: "Password requires a symbol.",
  },
  repassword: {
    oneOf: "Passwords must match",
    required: "Confirm Password is required",
  },
  image: {
    fileSize: "File size must be less than 2MB",
    fileType: "Only JPG or PNG images are allowed",
  },
};
