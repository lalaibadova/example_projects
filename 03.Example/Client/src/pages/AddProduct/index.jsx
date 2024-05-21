import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  useDeleteFoodMutation,
  useGetAllFoodQuery,
  usePostFoodMutation,
} from "../../services/foodApi";
import AddFoods from "../../validation/AddValidation";
import { Button, Container } from "@mui/material";
import style from "./index.module.scss";
import { Table } from "antd";

const AddProduct = () => {
  const { data, refetch } = useGetAllFoodQuery();
  const [deleted] = useDeleteFoodMutation();
  const [newProduct] = usePostFoodMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      img: "",
      description: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await newProduct(values);
        refetch();
        resetForm();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: AddFoods,
  });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Image",
      render: (record) => {
        return <img src={record.img} alt="" width={"100px"} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Delete",
      render: (record) => {
        return (
          <Button
            onClick={async () => {
              await deleted(record._id);
              refetch();
            }}
            variant="outlined"
          >
            delete
          </Button>
        );
      },
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Container>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <TextField
            style={{ marginTop: "20px" }}
            onChange={formik.handleChange}
            value={formik.values.img}
            name="img"
            id="outlined-image"
            label="Image"
            variant="outlined"
            type="url"
          />
          {formik.errors.img && formik.touched.img && (
            <span style={{ color: "red" }}>{formik.errors.img}</span>
          )}
          <TextField
            style={{ marginTop: "20px" }}
            onChange={formik.handleChange}
            value={formik.values.title}
            name="title"
            id="outlined-title"
            label="Title"
            variant="outlined"
          />
          {formik.errors.title && formik.touched.title && (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          )}
          <TextField
            style={{ marginTop: "20px" }}
            onChange={formik.handleChange}
            value={formik.values.price}
            name="price"
            id="outlined-price"
            label="Price"
            variant="outlined"
          />
          {formik.errors.price && formik.touched.price && (
            <span style={{ color: "red" }}>{formik.errors.price}</span>
          )}
          <TextField
            style={{ marginTop: "20px" }}
            onChange={formik.handleChange}
            value={formik.values.description}
            name="description"
            id="outlined-description"
            label="Description"
            variant="outlined"
          />
          {formik.errors.description && formik.touched.description && (
            <span style={{ color: "red" }}>{formik.errors.description}</span>
          )}
          <Button className={style.button} variant="contained" type="submit">
            Add
          </Button>
        </form>
        <Table
          columns={columns}
          dataSource={data?.data}
          onChange={onChange}
          showSorterTooltip={{
            target: "sorter-icon",
          }}
        />
      </Container>
    </>
  );
};

export default AddProduct;
