import * as Yup from "yup";

const AddValidtion = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required(),
  img: Yup.string().required("Required"),
  isNewProduct: Yup.bool().default(true),
  discountPercent: Yup.number().required(),
});
export default AddValidtion;
