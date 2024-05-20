import * as Yup from "yup"
const AddValidation = Yup.object().shape({
    title:Yup.string().required(),
    description:Yup.string().required(),
    price:Yup.number().required(),
    image:Yup.string().required(),

})
export default AddValidation