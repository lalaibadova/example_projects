import React, { useContext, useState } from "react";
import { useGetAllProductsQuery } from "../../services/productApi";
import { Container } from "@mui/material";
import style from "./index.module.scss";
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
const Home = () => {
  const { data } = useGetAllProductsQuery();
  const { basket, setBasket, setLocalBasket } = useContext(BasketContext);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data
    ? data.data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className={style.banner}>
        <div className={style.bannerTitle}>
          <h4>SPRING / SUMMER COLLECTION 2017</h4>
          <h1>
            Get up to 30% Off <br /> New Arrivals
          </h1>
          <button>SHOP NOW</button>
        </div>
      </div>
      <input
      style={{marginLeft:"400px", marginTop:"50px"}}
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Container>
        <div className={style.cards}>
          <Grid container spacing={2}>
            {filteredData &&
              filteredData.map((product) => {
                return (
                  <Grid item xs={3}>
                    <div className={style.card}>
                      <div className={style.img}>
                        <img src={product.img} alt="" />
                      </div>
                      <div className={style.title}>
                        <h4>{product.title}</h4>
                        <p>${product.price}</p>
                       <div>
                         <button
                          onClick={() => {
                            const dublicated = basket.find(
                              (q) => q._id === product._id
                            );
                            console.log(basket);
                            if (dublicated) {
                              dublicated.count += 1;
                              setBasket([...basket]);
                              setLocalBasket([...basket]);
                            } else {
                              const found = { ...product };
                              found.count = 1;
                              setBasket([...basket, found]);
                              setLocalBasket([...basket, found]);
                            }
                          }}
                        >
                          basket
                        </button>
                        
                        <button>
                          <Link
                            className={style.link}
                            to={`products/${product._id}`}
                          >
                            detail
                          </Link>
                        </button>
                       </div>
                      </div>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Home;
