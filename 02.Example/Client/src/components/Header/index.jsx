import React from "react";
import Container from "@mui/material/Container";
import style from "../Header/index.module.scss";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
const Header = () => {
  return (
    <nav>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h2>
              Selling <span>.</span>
            </h2>
          </Grid>
          <Grid item xs={4}>
            <ul>
              <li>
                <Link className={style.link} to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={style.link} to={"/products"}>
                  Products
                </Link>
              </li>
              <li>
                <Link className={style.link} to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className={style.link} to={"/about-us"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className={style.link} to={"/blog"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className={style.link} to={"/add-product"}>
                  Add Product
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
};

export default Header;
