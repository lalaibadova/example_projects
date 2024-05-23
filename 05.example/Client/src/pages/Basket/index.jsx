import React, { useContext } from "react";
import { Table } from "antd";
import { BasketContext } from "../../context/BasketContext";

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
        return <img src={record.img} alt="" width={100} />;
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
                updated.count-=1
                setBasket([ ...basket ]);
                setLocalBasket([ ...basket ]);
              } else {
                const dec = basket.filter((q) => q._id !== record._id);
                setBasket(dec)
                setLocalBasket(dec)
              }
            }}
          >
            Decrement
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
            {" "}
            Increment
          </button>
        );
      },
    },
    {
      title: "Reset",
      render: (record) => {
        return(
          <button onClick={()=>{
            const updated=basket.filter((q)=>q._id!==record._id)
            setBasket(updated)
            setLocalBasket(updated)
          }}>Reset</button>
        )
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Table
        style={{ marginTop: "80px" }}
        columns={columns}
        dataSource={basket}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </>
  );
};

export default Basket;
