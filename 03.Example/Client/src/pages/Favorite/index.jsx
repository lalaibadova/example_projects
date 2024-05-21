import React, { useContext } from 'react'
import { FavsContext } from '../../context/favsContext';
import style from "./index.module.scss";

const Favorite = () => {
    const { favs, setFavs, setLocalFavs } = useContext(FavsContext);
    console.log(favs)
  return (
<>
   {favs && favs.map((product)=>{
    return (
          <div className={style.card}>
          <div className={style.cardImg}>
            <img src={product.img} alt="" />
          </div>
          <div className={style.cardTitle}>
            <h3>
              <b>${product.price}.50</b>
            </h3>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        </div>
    )
   })}
</>
  )
}

export default Favorite