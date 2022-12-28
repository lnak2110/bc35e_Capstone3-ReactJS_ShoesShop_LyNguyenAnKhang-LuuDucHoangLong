import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getAllProductApi,
  getProductAction,
} from "../../redux/reducer/productReducer";
import ShoesCard from "../../components/ShoesCard";
import { NavLink } from "react-router-dom";

const Search = () => {
  
  const { arrProduct } = useSelector((state) => state.productReducer);

  return (
    <div className="container">
      <div className="search_form">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Search</label>
            <input
              type="text"
              className="form-control"
              id="searchForm"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <h1>Search Result</h1>
      <form>
        <div className="form-group price_form">
          <label htmlFor="exampleInputEmail1">Price</label>
          <select
            type="text"
            className="form-control"
            id="searchForm"
            aria-describedby="emailHelp"
          >
            <option value="dec">Descend</option>
            <option value="asc">Ascend</option>
          </select>
        </div>
      </form>
      <div className="result">
        <div className="row row-cols-1 row-cols-md-3">
          {arrProduct.map((prod, idx) => {
            return (
              <div className="col" key={prod.id}>
                <ShoesCard prod={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search