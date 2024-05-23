import * as Yup from "yup";

const foundationValidation = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  img: Yup.string().url().required("Required"),
});

export default foundationValidation;
