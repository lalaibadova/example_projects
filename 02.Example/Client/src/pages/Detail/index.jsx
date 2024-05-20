import React from "react";
import { useGetByIdQuery } from "../../services/productApi";
import { useParams } from "react-router";
import style from "../Detail/index.module.scss"
import { Link } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const { data } = useGetByIdQuery(id);
  console.log(data)
  return (
    <div className={style.detailPage}>
      {data && <div className={style.card}>
        <div className={style.cardImg}>
          <img src={data.data.image} alt="" />
        </div>
        <div className={style.cardTitle}>
          <h4>{data.data.title}</h4>
          <p>{data.data.description}</p>
          <p><b>Price:</b> {data.data.price}</p>
          <button>
            <Link to={`/`}>go back</Link>
          </button>
        </div>
      </div>}
    </div>
  );
};

export default Detail;
