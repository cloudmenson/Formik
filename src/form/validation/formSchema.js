import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is a required")
    .min(6)
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
});