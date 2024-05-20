import { useGetAllProductsQuery } from "../../services/productApi";
import { Col, Row } from "antd";
import {Link} from "react-router-dom"
import style from "../Home/index.module.scss";
const Home = () => {
  const { data } = useGetAllProductsQuery();
  console.log(data);

  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "100px" }}>
        <div className={style.cards} >
          <Row>
            {data &&
              data.data.map((product) => {
                return (
                  <Col span={8}>
                    <div className={style.card}>
                      <div className={style.cardImg}>
                        <img src={product.image} alt="" />
                      </div>
                      <div className={style.cardTitle}>
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <button><Link to={`/detail/${product._id}`}>Detail</Link></button>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
