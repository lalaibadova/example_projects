import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetAllMenuQuery,
  usePostMenuMutation,
} from "../../services/menuApi";
import MenuSchema from "../../validations/menuValidation";
const AddProduct = () => {
  const navigate = useNavigate();
  const { refetch } = useGetAllMenuQuery();
  const [postProduct] = usePostMenuMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      price: "",
      category: "",
      ingredients: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await postProduct(values);
        resetForm();
        refetch();
        navigate("/");
      } catch (error) {
        console.error("Error adding movie:", error);
      }
    },
    validationSchema: MenuSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="outlined-title"
        label="title"
        variant="outlined"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title && formik.touched.title && (
        <span style={{ color: "red" }}>{formik.errors.title}</span>
      )}
      <TextField
        id="outlined-image"
        label="image"
        variant="outlined"
        name="image"
        onChange={formik.handleChange}
        value={formik.values.image}
      />
      {formik.errors.image && formik.touched.image && (
        <span style={{ color: "red" }}>{formik.errors.image}</span>
      )}
      <TextField
        id="outlined-price"
        label="price"
        variant="outlined"
        name="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price && formik.touched.price && (
        <span style={{ color: "red" }}>{formik.errors.price}</span>
      )}
      <TextField
        id="outlined-category"
        label="category"
        variant="outlined"
        name="category"
        onChange={formik.handleChange}
        value={formik.values.category}
      />
      {formik.errors.category && formik.touched.category && (
        <span style={{ color: "red" }}>{formik.errors.category}</span>
      )}
      <TextField
        id="outlined-ingredients"
        label="ingredients"
        variant="outlined"
        name="ingredients"
        onChange={formik.handleChange}
        value={formik.values.ingredients}
      />
      {formik.errors.ingredients && formik.touched.ingredients && (
        <span style={{ color: "red" }}>{formik.errors.ingredients}</span>
      )}
      <Button type="submit">Send</Button>
    </form>
  );
};

export default AddProduct;
