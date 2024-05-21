 import * as Yup from 'yup';
 
 const AddFoods = Yup.object().shape({
   title: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   price: Yup.number()
     .required('Required'),
   img: Yup.string().url().required('Required'),
   description:Yup.string().required('Required')
 });

export default AddFoods