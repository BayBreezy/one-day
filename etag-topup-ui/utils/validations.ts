import { array, object, string } from "yup";

export const RegisterSchema = object({
  accountType: string().required().label("Account Type").oneOf(["Company", "Individual"]),
  email: string().required().email().label("Email").default("egowout@cidirid.gf"),
  phone: string().required().label("Phone").min(10).max(10).default("1785684099"),
  firstName: string().required().label("First Name").default("Wintah"),
  lastName: string().required().label("Last Name").default("Fik"),
});

export const SignInSchema = object({
  email: string().required().email().label("Email").default("wintahfik@iviwes.cu"),
  password: string().required().label("Password").min(8).max(20).default("123456789"),
});

export const ForgotPasswordSchema = object({
  email: string().required().email().label("Email").default("duv@rolicku.ug"),
});

export const OTPSchema = object({
  otp: array(string().required("Please enter all values").label("Code"))
    .min(6)
    .max(6)
    .required()
    .label("Code")
    .default(["2", "3", "4", "5", "6", "7"]),
});
