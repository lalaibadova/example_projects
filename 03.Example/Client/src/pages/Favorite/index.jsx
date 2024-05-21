import React, { useContext } from "react";
import { FavsContext } from "../../context/favsContext";
import style from "./index.module.scss";
import { Table } from "antd";

const Favorite = () => {
  const { favs, setFavs, setLocalFavs } = useContext(FavsContext);
  console.log(favs);
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
      title: "Reset",
      render: (record) => {
        return (
          <button
            onClick={() => {
              const updated = favs.filter((q) => q._id !== record._id);
              setFavs(updated);
              setLocalFavs(updated);
            }}
          >
            Reset
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
      <Table
        style={{ marginTop: "60px" }}
        columns={columns}
        dataSource={favs}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </>
  );
};

export default Favorite;
