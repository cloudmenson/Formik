import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is a required")
    .min(6, "Minimum 6 characters")
    .matches(/^[A-Z|А-Я]/g, "First letter should be big"),
  email: yup
    .string()
    .required("Email is a required")
    .email("Example@yandex.ua"),
  phone: yup
    .string()
    .required("Phone is a required")
    .matches(/^\d{12}/g, "Phone should be with 12 numbers")
    .max(12, "Maximum 12 numbers"),
  password: yup
    .string()
    .required("Password is a required")
    .matches(/^[A-Z|А-Я]/g, "First letter should be big")
    .min(8, "Minimum 8 characters"),
});
