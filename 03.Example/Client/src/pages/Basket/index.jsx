import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import { Table } from "antd";
const Basket = () => {
  const { basket, setBasket, setLocalBasket } = useContext(BasketContext);
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
      title: "Count",
      dataIndex: "count",
    },
    {
      title: "Decrement",
      render: (record) => {
        return (
          <button
            onClick={() => {
              const updated = basket.find((q) => q._id === record._id);
              if (updated.count > 1) {
                updated.count -= 1;
                setBasket([...basket]);
                setLocalBasket([...basket]);
              } else {
                const updated = basket.filter((q) => q._id !== record._id);
                setBasket(updated);
                setLocalBasket(updated);
              }
            }}
          >
            -
          </button>
        );
      },
    },
    {
      title: "Increment",
      render: (record) => {
        return (
          <button
            onClick={() => {
              const updated = basket.find((q) => q._id === record._id);
              updated.count += 1;
              setBasket([...basket]);
              setLocalBasket([...basket]);
            }}
          >
            +
          </button>
        );
      },
    },
    {
      title: "Reset",
      render: (record) => {
        return (
          <button
            onClick={() => {
              const updated = basket.filter((q) => q._id !== record._id);
              setBasket(updated);
              setLocalBasket(updated);
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
        dataSource={basket}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
      <button
      style={{ border: "none",
        backgroundColor: "#fda403",
        padding:" 10px 40px",
      marginTop:"20px"
}}
        onClick={() => {
          setBasket([]);
          setLocalBasket([]);
        }}
      >
        Order
      </button>
    </>
  );
};

export default Basket;
