import { Container } from "@mui/material";
import React from "react";
import style from "./index.module.scss";
import { useGetByIdQuery } from "../../services/foundationApi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetByIdQuery(id);
  return (
    <Container>
      <div className={style.cards}>
        {data && (
          <div className={style.card}>
            <div className={style.cardImg}>
              <img src={data.data.img} alt="" />
            </div>
            <div className={style.cardTitle}>
              <h1>{data.data.title}</h1>
              <h4>{data.data.description}</h4>
              <button>
                <Link className={style.link} to={`/`}>
                  Go Back
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Detail;
