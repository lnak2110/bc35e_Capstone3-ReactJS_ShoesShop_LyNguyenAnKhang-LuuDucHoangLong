import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ShoesCard from "../../assets/scss/components/Card/ShoesCard";
import axios from "axios";
import {
  getAllProductApi,
  getProductAction,
} from "../../redux/reducer/productReducer";
import '../../assets/scss/components/Carousel/_carousel.scss'

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "600px",
  color: "#999",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
};

const Home = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  console.log("arrProduct: ", arrProduct);

  const dispatch = useDispatch();

  const getAllProduct = async () => {
    const action2 = getAllProductApi;
    dispatch(action2);
  };

 

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <Carousel afterChange={onChange} autoplay={true} effect={"scroll"}>
        {arrProduct.slice(0, 4).map((item, index) => {
          return (
            <div key={index}>
              <div style={contentStyle} className="d-flex carousel">
                <div className="w-50">
                  <img className="w-100" src={item.image} alt="" />
                </div>
                <div className="w-50">
                  <h3 className="description">{item.description}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <h3>Product Feature</h3>
      <div className="row">
        {arrProduct.map((prod, idx) => {
          return (
            <div className="col-4" key={prod.id}>
              <ShoesCard prod={prod} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
