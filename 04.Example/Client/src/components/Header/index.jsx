import React, { useContext } from 'react'
import Container from '@mui/material/Container';
import { Col, Row } from 'antd';
import style from "./index.module.scss"
import {Link} from "react-router-dom"
import { BasketContext } from '../../context/BasketContext';
const Header = () => {
    const {basket}=useContext(BasketContext)
  return (
   <Container>
    <nav>
        <Row>
            <Col span={12}>
                <div className={style.logo}>COLO<span style={{color:"red"}}>SHOP</span></div>
            </Col>
            <Col span={12}>
                <div className={style.menu}>
                    <ul>
                        <li><Link className={style.link} to={"/"}>Home</Link></li>
                        <li><Link className={style.link} to={"/pages"}>Pages</Link></li>
                        <li><Link className={style.link} to={"/favorite"}>Favorite</Link></li>
                        <li><Link className={style.link} to={"/shop"}>Shop</Link></li>
                        <li><Link className={style.link} to={"/add-product"}>Add Product</Link></li>
                        <li><Link className={style.link} to={"/basket"}>Basket <sup>{basket.length}</sup></Link></li>
                    </ul>
                </div>
            </Col>
        </Row>
    </nav>
   </Container>
  )
}

export default Header