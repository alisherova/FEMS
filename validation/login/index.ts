import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  phoneNumber: yup.string().required("Login is a required field"),
  password: yup.string().required("Password is a required field"),
});
