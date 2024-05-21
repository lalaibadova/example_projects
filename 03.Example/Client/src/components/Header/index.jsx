import React from "react";
import Container from '@mui/material/Container';
import style from "./index.module.scss"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <Container>
      <nav>
        <div className={style.header}>
          <div className={style.logo}>
            <a href="#">EATWELL</a>
          </div>
          <div className={style.menu}>
            <ul>
              <li><Link className={style.link} to={"/"}>Home</Link></li>
              <li><Link className={style.link} to={"/menu"}>Menu</Link></li>
              <li><Link className={style.link} to={"/add-product"}>Add  Product</Link></li>
              <li><Link className={style.link} to={"/about"}>About</Link></li>
              <li><Link className={style.link} to={"/basket"}>Basket</Link></li>
              <li><Link className={style.link} to={"/favs"}>Favorite</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
