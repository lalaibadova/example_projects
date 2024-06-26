import React, { useContext, useState } from "react";
import { useGetAllFoundationQuery } from "../../services/foundationApi";
import Container from "@mui/material/Container";
import { Col, Row } from "antd";
import style from "./index.module.scss";
import { BasketContext } from "../../context/BasketContext";
import { FavoriteContext } from "../../context/FavoriteContext";
import { Link } from "react-router-dom";
const Home = () => {
  const { basket, setBasket, setLocalBasket } = useContext(BasketContext);
  const { favorite, setFavorite, setLocalFavorite } =
    useContext(FavoriteContext);
  const { data } = useGetAllFoundationQuery();
  const [query, setQuery] = useState("");
  const filtered = data
    ? data.data.filter((q) =>
        q.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  return (
    <>
      <Container>
        <input
          style={{
            marginTop: "100px",
            padding: "10px 40px",
            border: "2px solid red",
          }}
          type="text"
          placeholder="Search by title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={style.cards}>
          <Row>
            {filtered &&
              filtered.map((item) => {
                return (
                  <Col span={8}>
                    <div className={style.card}>
                      <div className={style.cardImg}>
                        <img src={item.img} alt="" />
                      </div>
                      <div className={style.cardTitle}>
                        <h1>{item.title}</h1>
                        <h4>{item.description}</h4>
                        <button>
                          <Link
                            className={style.link}
                            to={`/detail/${item._id}`}
                          >
                            Detail
                          </Link>
                        </button>
                        <button
                          onClick={() => {
                            const dublicated = basket.find(
                              (q) => q._id === item._id
                            );
                            try {
                              if (dublicated) {
                                dublicated.count += 1;
                                setBasket([...basket]);
                                setLocalBasket([...basket]);
                              } else {
                                const found = { ...item };
                                found.count = 1;
                                setBasket([...basket, found]);
                                setLocalBasket([...basket, found]);
                              }
                            } catch (error) {
                              console.log(error);
                            }
                          }}
                        >
                          Basket
                        </button>
                        <button
                          onClick={() => {
                            const updated = favorite.find(
                              (q) => q._id === item._id
                            );
                            if (updated) {
                              const filterFav = favorite.filter(
                                (q) => q._id !== item._id
                              );
                              setFavorite(filterFav);
                              setLocalFavorite(filterFav);
                            } else {
                              setFavorite([...favorite, item]);
                              setLocalFavorite([...favorite, item]);
                            }
                          }}
                        >
                          Favorite
                        </button>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
