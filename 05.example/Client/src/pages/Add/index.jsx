import React from "react";
import { useFormik } from "formik";
import {
  useDeleteFoundationMutation,
  useGetAllFoundationQuery,
  usePostFoundationMutation,
} from "../../services/foundationApi";
import { useNavigate } from "react-router-dom";
import foundationValidation from "../../validation/foundationValidation";
import TextField from "@mui/material/TextField";
import style from "./index.module.scss";
import { Table } from "antd";

const Add = () => {
  const [deleted]=useDeleteFoundationMutation()
  const [newFoundation] = usePostFoundationMutation();
  const { data, refetch } = useGetAllFoundationQuery();
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
        await newFoundation(values);
        refetch();
        resetForm();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: foundationValidation,
  });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Image",
      render: (record) => {
        return <img src={record.img} alt="" width={100} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Delete",
      render: (record) => {
        return <button onClick={async()=>{
         await deleted(record._id)
         refetch()
        }}>Delete</button>;
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <TextField
          className={style.text}
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
          className={style.text}
          onChange={formik.handleChange}
          values={formik.values.price}
          name="price"
          id="outlined-price"
          label="Price"
          variant="outlined"
        />
        {formik.errors.price && formik.touched.price && (
          <span style={{ color: "red" }}>{formik.errors.price}</span>
        )}

        <TextField
          className={style.text}
          onChange={formik.handleChange}
          values={formik.values.description}
          name="description"
          id="outlined-description"
          label="Description"
          variant="outlined"
        />
        {formik.errors.description && formik.touched.description && (
          <span style={{ color: "red" }}>{formik.errors.description}</span>
        )}

        <TextField
          className={style.text}
          onChange={formik.handleChange}
          values={formik.values.img}
          name="img"
          id="outlined-img"
          label="Img"
          variant="outlined"
        />
        {formik.errors.img && formik.touched.img && (
          <span style={{ color: "red" }}>{formik.errors.img}</span>
        )}
        <button type="submit">Add</button>
      </form>
      <Table
        style={{ marginTop: "80px" }}
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

export default Add;
