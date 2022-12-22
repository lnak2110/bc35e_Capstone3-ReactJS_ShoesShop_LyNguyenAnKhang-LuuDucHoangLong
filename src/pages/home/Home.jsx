import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  getAllProductApi,
  getProductAction,
} from '../../redux/reducer/productReducer';
import ShoesCard from '../../components/ShoesCard';

const contentStyle = {
  margin: 0,
  height: '600px',
  color: '#999',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#fff',
};

const Home = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  console.log('arrProduct: ', arrProduct);

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
