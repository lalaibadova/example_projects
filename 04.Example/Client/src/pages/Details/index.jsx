import React from 'react'
import { useGetByIdQuery } from '../../services/productApi'
import { Link, useParams } from "react-router-dom";
import style from "./index.module.scss"
import { Helmet } from "react-helmet";

const Details = () => {
  const {id}=useParams()
  const {data}=useGetByIdQuery(id)
  console.log(data)
  return (
    <>
    <Helmet>
        <title>Detail</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    {data &&  <div className={style.card}>
                <div className={style.img}>
                  <img src={data.data.img} alt="" />
                </div>
                <div className={style.title}>
                  <h2>{data.data.title}</h2>
                  <p>
                    <b>{data.data.price}</b>
                  </p>
                  
                  <button>
                    <Link className={style.link} to={"/"}>go back</Link>
                  </button>
                </div>
              </div>}
    </>
  )
}

export default Details