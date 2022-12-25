import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  changeProductAmountAction,
  getProductDetailAction,
  resetProductAmountAction,
} from '../../redux/reducer/productReducer';
import { getProductByIdApi } from '../../redux/reducer/productReducer';
import ShoesCard from '../../components/ShoesCard';
import { addToCartAction } from '../../redux/reducer/cartReducer';

const Detail = () => {
  const { productDetail, productAmount } = useSelector(
    (state) => state.productReducer
  );

  const dispatch = useDispatch();

  const params = useParams();

  const getProductById = async () => {
    const action = getProductByIdApi(params.id);
    dispatch(action);
  };

  useEffect(() => {
    getProductById();
    dispatch(resetProductAmountAction());
  }, [params.id]);

  const changeProductAmount = (num) => {
    dispatch(changeProductAmountAction(num));
  };

  const addToCart = () => {
    dispatch(
      addToCartAction({
        ...productDetail,
        amount: productAmount,
      })
    );
  };

  console.log(productDetail);
  return (
    <div className="container detail">
      <div className="row mt-5">
        <div className="col-4">
          <img src={productDetail?.image} alt="" />
        </div>
        <div className="col-8 product_info">
          <h3>{productDetail?.name}</h3>
          <p className="w-50">{productDetail?.description}</p>
          <p className="available_size">Available Size</p>
          {productDetail?.size?.map((item, index) => {
            return (
              <button className="btn btn-dark size" key={index}>
                {item}
              </button>
            );
          })}
          <p className="text-danger price">$ {productDetail?.price}</p>
          <div className="d-flex">
            <button
              className="btn btn_qual"
              onClick={() => changeProductAmount(1)}
            >
              +
            </button>
            <p className="quantity">{productAmount}</p>
            <button
              className="btn btn_qual"
              onClick={() => changeProductAmount(-1)}
            >
              -
            </button>
          </div>
          <NavLink
            className="btn btn-success add"
            to={'/cart'}
            onClick={addToCart}
          >
            Add to Cart
          </NavLink>
        </div>
      </div>
      <div className="mt-3 text-center">
        <h1 className="mb-5">- Related Product -</h1>
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
