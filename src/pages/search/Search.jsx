import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getAllProductApi,
  getProductAction,
} from "../../redux/reducer/productReducer";
import ShoesCard from "../../components/ShoesCard";
import { NavLink } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  const { productSearch } = useSelector((state) => state.productReducer);

  const handleChange = (evt) => {
    dispatch({ searchTerm: evt.target.value });
  };

  const getSearchProduct = async () => {
    const action2 = getAllProductApi;
    dispatch(action2);
    arrProduct.map((prod, idx) => {
      if (this.searchTerm === prod.name) {
        return (
          <div className="col" key={prod.id}>
            <ShoesCard prod={prod} />
          </div>
        );
      }
      return;
    });
  };

  return (
    <div className="search">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="search_form">
              <form className="pt-5">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Search</label>
                  <div className="form-inline">
                    <input
                      type="text"
                      className="form-control"
                      id="searchForm"
                      aria-describedby="emailHelp"
                      value={productSearch.searchTerm}
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.onSearch(this.state.searchTerm);
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="result_head">
        <div className="container">
          <h1>Search Result</h1>
        </div>
      </div>
      <div className="container">
        <div className="price_form">
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
        </div>
        <div className="result">
          <div className="row row-cols-1 row-cols-md-3">{getSearchProduct}</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
