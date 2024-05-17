import * as Yup from "yup";
const MenuSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.number().required(),
  image: Yup.string().url().required(),
  ingredients: Yup.string().required(),
  category: Yup.string().required(),
});
export default MenuSchema;
