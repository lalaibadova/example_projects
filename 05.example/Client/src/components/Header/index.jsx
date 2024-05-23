import React from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import { Col, Row } from 'antd';
import style from "./index.module.scss"
const Header = () => {
  return (
    <Container>
      <nav>
        <Row>
          <Col span={12}>
            <div className={style.logo}>
              <h2>FOUNDATION</h2>
            </div>
          </Col>
          <Col span={12}>
            <div className={style.menu}>
              <ul>
                <li><Link className={style.link} to={"/"}>Home</Link></li>
                <li><Link className={style.link} to={"/about"}>About</Link></li>
                <li><Link className={style.link} to={"/add"}>Add</Link></li>
                <li><Link className={style.link} to={"/basket"}>Basket</Link></li>
                <li><Link className={style.link} to={"/favorite"}>Favorite</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </nav>
    </Container>
  );
};

export default Header;
