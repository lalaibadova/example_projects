import React from "react";
import TextField from "@mui/material/TextField";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  usePostProductMutation,
} from "../../services/productApi";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AddValidation from "../../validation/addValidation";
import { Button } from "@mui/material";
import { Table } from "antd";
const AddProduct = () => {
  const [newProduct] = usePostProductMutation();
  const { data,refetch  } = useGetAllProductsQuery();
  const navigate = useNavigate();
  const [deleted] = useDeleteProductMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      image: "",
      description: "",
    },
    onSubmit:async (values, { resetForm }) => {
      try {
        await newProduct(values);
        resetForm();
        refetch();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: AddValidation,
  });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "image",
      dataIndex: "image",
      render: (record) => {
        return (
          <>
          <img src={record} alt="" style={{width: "100px"}}/>
          </>
        );
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
            color="error"
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
      <form onSubmit={formik.handleSubmit} style={{ marginTop: "100px" }}>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.title}
          name="title"
          id="outlined-title"
          label="title"
          variant="outlined"
        />
        {formik.errors.title && formik.touched.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}
        <TextField
          onChange={formik.handleChange}
          value={formik.values.image}
          name="image"
          id="outlined-image"
          label="image"
          variant="outlined"
          type="url"
        />
        {formik.errors.image && formik.touched.image && (
          <span style={{ color: "red" }}>{formik.errors.image}</span>
        )}
        <TextField
          onChange={formik.handleChange}
          value={formik.values.description}
          name="description"
          id="outlined-description"
          label="description"
          variant="outlined"
        />
        {formik.errors.description && formik.touched.description && (
          <span style={{ color: "red" }}>{formik.errors.description}</span>
        )}
        <TextField
          onChange={formik.handleChange}
          value={formik.values.price}
          name="price"
          id="outlined-price"
          label="price"
          variant="outlined"
          type="number"
        />
        {formik.errors.image && formik.touched.image && (
          <span style={{ color: "red" }}>{formik.errors.image}</span>
        )}
        <Button variant="contained" type="submit">
          Add Product
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
    </>
  );
};

export default AddProduct;
