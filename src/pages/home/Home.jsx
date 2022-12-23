import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getAllProductApi,
  getProductAction,
} from "../../redux/reducer/productReducer";
import ShoesCard from "../../components/ShoesCard";
import { NavLink } from "react-router-dom";

const contentStyle = {
  margin: 0,
  height: "600px",
  color: "#999",
  lineHeight: "160px",
  textAlign: "left",
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
              <div style={contentStyle} className="row carousel d-flex">
                <div className="col-8 w-50">
                  <img className="w-100" src={item.image} alt="" />
                </div>
                <div className="col-4 w-50">
                  <h2>{item.name}</h2>
                  <h3 className="home_description">{item.description}</h3>
                  <button className="btn btn-success home_to_detail">
                      <NavLink to={`/detail/${item?.id}`}>Buy Now</NavLink>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="container">
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
      </div>
    </>
  );
};

export default Home;
