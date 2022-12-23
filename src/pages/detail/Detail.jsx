import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { getProductDetailAction } from '../../redux/reducer/productReducer';
import { getProductByIdApi } from '../../redux/reducer/productReducer';
import ShoesCard from '../../components/ShoesCard';

const Detail = () => {
  const { productDetail } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const params = useParams();

  const getProductById = async () => {
    const action = getProductByIdApi(params.id);
    dispatch(action);
  };

  useEffect(() => {
    getProductById();
  }, [params.id]);
  console.log(productDetail);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4">
          <img src={productDetail?.image} alt="" />
        </div>
        <div className="col-8 ml-5">
          <h3>{productDetail?.name}</h3>
          <p>{productDetail?.description}</p>
          {productDetail?.size?.map((item, index) => {
            return (
              <button className="btn btn-dark p-1 m-1" key={index}>
                {item}
              </button>
            );
          })}
          <p className="text-danger font-weight-bold">
            $ {productDetail?.price}
          </p>
          <NavLink className="btn btn-success" to={'/cart'}>
            Add to Cart <i className="fa fa-cart-plus"></i>
          </NavLink>
        </div>
      </div>
      <div className="mt-2">
        <h3>Related Product</h3>
        <div className="row">
          {productDetail?.relatedProducts?.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <ShoesCard prod={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
