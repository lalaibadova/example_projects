import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
  usePostProductMutation,
} from "../../services/productApi";
import AddValidtion from "../../validation/AddValidation";
import { Container, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Table } from "antd";
import { Helmet } from "react-helmet";
import style from "./index.module.scss"

const AddProduct = () => {
  const { data, refetch } = useGetAllProductsQuery();
  const [newProduct] = usePostProductMutation();
  const [deleted] = useDeleteProductMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      img: "",
      discountPercent: "",
      isNewProduct: false,
    },
    onSubmit: async (values, { resetForm }) => {
      console.log("values: ", values);
      try {
        const res = await newProduct(values);
        console.log(res);
        refetch();
        resetForm();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: AddValidtion,
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
      title: "delete",
      render: (record) => {
        return (
          <button
        style={{
          padding:"10px 40px",
          border:"1px solid rgb(194, 23, 23)",
          backgroundColor:"rgb(194, 23, 23)",
          color:"white",
          borderRadius:"20px"
          
        }}
            onClick={async () => {
              await deleted(record._id);
              refetch();
            }}
          >
            delete
          </button>
        );
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Helmet>
        <title>Add Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      ;
     <div style={{width:"40%",margin:"50px auto" }}>
       <Container>
        <form onSubmit={formik.handleSubmit} style={{ marginTop: "100px" }}>
          <TextField
          style={{width:"100%" , marginBottom:"20px"}}
            onChange={formik.handleChange}
            values={formik.values.img}
            name="img"
            id="outlined-img"
            label="İmage"
            variant="outlined"
            type="url"
          />
          {formik.errors.img && formik.touched.img && (
            <span style={{ color: "red" }}>{formik.errors.img}</span>
          )}
          <TextField
          style={{width:"100%" , marginBottom:"20px"}}
            onChange={formik.handleChange}
            values={formik.values.title}
            name="title"
            id="outlined-title"
            label="Title"
            variant="outlined"
          />
          {formik.errors.title && formik.touched.title && (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          )}
          <TextField
          style={{width:"100%" , marginBottom:"20px"}}
            onChange={formik.handleChange}
            values={formik.values.price}
            name="price"
            id="outlined-price"
            label="Price"
            variant="outlined"
            type="number"
          />
          {formik.errors.price && formik.touched.price && (
            <span style={{ color: "red" }}>{formik.errors.price}</span>
          )}
          <TextField
          style={{width:"100%" , marginBottom:"20px"}}
            onChange={formik.handleChange}
            values={formik.values.discountPercent}
            name="discountPercent"
            id="outlined-discountPercent"
            label="DiscountPercent"
            variant="outlined"
          />
          {formik.errors.discountPercent && formik.touched.discountPercent && (
            <span style={{ color: "red" }}>
              {formik.errors.discountPercent}
            </span>
          )}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="isNewProduct"
            name="isNewProduct"
            values={formik.values.isNewProduct}
            onChange={formik.handleChange}
          />
          <button className={style.button} type="submit">Add</button>
        </form>
      </Container>
     </div>
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
