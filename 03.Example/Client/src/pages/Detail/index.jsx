import React from "react";
import { useGetByIdQuery } from "../../services/foodApi";
import { useParams } from "react-router-dom";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetByIdQuery(id);
  console.log(data)
  return (
    <>
      {data && (
        <div className={style.card}>
          <div className={style.cardImg}>
            <img src={data.data.img} alt="" />
          </div>
          <div className={style.cardTitle}>
            <h3>
              <b>${data.data.price}.50</b>
            </h3>
            <h2>{data.data.title}</h2>
            <p>{data.data.description}</p>
            <button>
              <Link className={style.link} to={`/`}>
                Go Back
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
