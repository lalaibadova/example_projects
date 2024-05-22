import { Container, styled } from "@mui/material";
import { Col, Row } from "antd";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import style from "./index.module.scss";
const Footer = () => {
  return (
    <div className={style.footer}>
      <Container>
        <Row>
          <Col className={style.col} span={6}>
            <h2>ABOUT US</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo facere repellendus accusamus eveniet sequi vitae.
            </p>
          </Col>
          <Col className={style.col} span={6}>
            <h2>THE RESTAURANT</h2>
            <ul>
              <li>About Us</li>
              <li>Chefs</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col className={style.col} span={6}>
            <h2>USEFUL LINKS</h2>
            <ul>
              <li>Foods</li>
              <li>Drinks</li>
              <li>Breakfast</li>
              <li>Brunch</li>
              <li>Dinner</li>
            </ul>
          </Col>

          <Col className={style.col} span={6}>
            <h2>USEFUL LINKS</h2>
            <ul>
              <li>Foods</li>
              <li>Drinks</li>
              <li>Breakfast</li>
              <li>Brunch</li>
              <li>Dinner</li>
            </ul>
          </Col>
          <Col className={style.icon} span={24}>
            <ul>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
            <h3>
              © Copyright ©2024 All rights reserved | This template is made with{" "}
              <FaHeart />
              by Colorlib
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
