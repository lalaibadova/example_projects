import React, { useContext } from "react";
import { useGetAllFoodQuery } from "../../services/foodApi";
import Container from "@mui/material/Container";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { BasketContext } from "../../context/basketContext";
import { FavsContext } from "../../context/favsContext";
const Home = () => {
  const { data } = useGetAllFoodQuery();
  console.log(data);
  const { basket, setBasket, setLocalBasket } = useContext(BasketContext);
  const { favs, setFavs, setLocalFavs } = useContext(FavsContext);
  return (
    <>
      <div className={style.banner}>
        <div className={style.title}>
          <h1>Welcome To EatWell</h1>
          <h2>Come and eat well with our delicious & healthy foods.</h2>
          <button>Reservation</button>
        </div>
      </div>
      <Container>
        <div className={style.welcome}>
          <Row>
            <Col className={style.title} span={12}>
              <h4>OUR STORY</h4>
              <h1>WELCOME</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <button>Learn More About Us</button>
            </Col>
            <Col className={style.img} span={12}>
              <img
                src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className={style.offer}>
          <h4>OUR OFFERS</h4>
          <h1>Our Offer This Summer</h1>
          <p>
            Far far away, behind the word mountains, far from the countries{" "}
            <br /> Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className={style.cards}>
          {data &&
            data.data.map((food) => {
              return (
                <div className={style.card}>
                  <div className={style.cardImg}>
                    <img src={food.img} alt="" />
                  </div>
                  <div className={style.cardTitle}>
                    <h3>
                      <b>${food.price}.50</b>
                    </h3>
                    <h2>{food.title}</h2>
                    <p>{food.description}</p>
                    <button>
                      <Link className={style.link} to={`/detail/${food._id}`}>
                        Detail
                      </Link>
                    </button>
                    <button
                      style={{
                        color: "white",
                        marginLeft: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        const dublicated = basket.find(
                          (q) => q._id === food._id
                        );
                        if (dublicated) {
                          dublicated.count += 1;
                          setBasket([...basket]);
                          setLocalBasket([...basket]);
                        } else {
                          const updated = { ...food };
                          updated.count = 1;
                          setBasket([...basket, updated]);
                          setLocalBasket([...basket, updated]);
                        }
                      }}
                    >
                      Basket
                    </button>
                    <button
                      style={{
                        color: "white",
                        marginLeft: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        const favFind = favs.find((q) => q._id === food._id);

                        if (favFind) {
                          const favorite = favs.filter(
                            (q) => q._id !== food._id
                          );
                          setFavs(favorite);
                          setLocalFavs(favorite);
                        } else {
                          setFavs([...favs, food]);
                          setLocalFavs([...favs, food]);
                        }
                      }}
                    >
                      Favs
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
      <Container>
        <div className={style.offer}>
          <h1>News</h1>
          <p>
            Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
       <div  className={style.cards}>
         <div className={style.card}>
          <div className={style.cardImg}>
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg"
              alt=""
            />
          </div>
          <div className={style.cardTitle}>
            <h2>We Have Dilecious Food</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button>Read More</button>
          </div>
        </div>
         <div className={style.card}>
          <div className={style.cardImg}>
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg"
              alt=""
            />
          </div>
          <div className={style.cardTitle}>
            <h2>Chef Special Menu</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button>Read More</button>
          </div>
        </div>
         <div className={style.card}>
          <div className={style.cardImg}>
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg"
              alt=""
            />
          </div>
          <div className={style.cardTitle}>
            <h2>Merriage Celebrations</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button>Read More</button>
          </div>
        </div>
       </div>
      </Container>
    </>
  );
};

export default Home;
