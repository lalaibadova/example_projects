import React, { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { Table } from "antd";

const Favorite = () => {
  const { favorite, setFavorite, setLocalFavorite } =
    useContext(FavoriteContext);
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
      title: "Reset",
      render:(record)=>{
        return(
          <button onClick={()=>{
            const updated=favorite.filter((q)=>q._id!==record._id)
            setFavorite(updated)
            setLocalFavorite(updated)
          }}>
            reset
          </button>
        )
      }
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Table
      style={{ marginTop: "80px" }}
      columns={columns}
      dataSource={favorite}
      onChange={onChange}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
    />
  );
};

export default Favorite;
