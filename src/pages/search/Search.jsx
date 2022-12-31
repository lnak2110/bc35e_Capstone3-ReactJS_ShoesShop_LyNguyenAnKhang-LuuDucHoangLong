import React, { useEffect, useMemo, useState, setParams } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductByKeywordApi,
  sortProductByOption,
} from "../../redux/reducer/productReducer";
import ShoesCard from '../../components/ShoesCard';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productsSearch } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  // const [searchResult, getProductByKeywordApi] = useState([]);

  let keywordOnUrl = searchParams.get('k');
  // const sortby = useParams.get("sortby");

  const frm = useFormik({
    initialValues: {
      keyword: '',
    },
    onSubmit: (values) => {
      setSearchParams({
        k: values.keyword,
      });
    },
  });

  useEffect(() => {
    dispatch(getProductByKeywordApi(keywordOnUrl));
  }, [keywordOnUrl]);

  // const sortBy = (value, arr) => {
  //   switch (value) {
  //     case "des": {
  //       getProductByKeywordApi(arr.sort((a, b) => a.price - b.price));
  //       break;
  //     }
  //     case "asc": {
  //       getProductByKeywordApi(arr.sort((a, b) => b.price - a.price));
  //       break;
  //     }
  //     default:
  //       return;
  //   }
  // };

  // const sortHandle = (e) => {
  //   e.preventDefault();
  //   const {value} = e.target;
  //   setParams({
  //     ...(keywordOnUrl && { keyword: keywordOnUrl }),
  //     ...(value !== "" && { sortby: value }),
  //   });
  //   sortBy(value, searchResult);
  // }

  //  useMemo(() => {
  //    dispatch(sortProductByOption(keywordOnUrl, sortby));
  //  }, [keywordOnUrl, sortby]);

  return (
    <div className="search">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="search_form">
              <form className="pt-5" onSubmit={frm.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Search</label>
                  <div className="form-inline">
                    <input
                      type="text"
                      className="form-control"
                      id="searchForm"
                      name="keyword"
                      aria-describedby="emailHelp"
                      value={frm.values.keyword}
                      onChange={frm.handleChange}
                    />
                    <button type="submit" className="btn btn-primary">
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
                /* onChange={(e) => {
                  sortHandle(e);
                }}
                defaultValue={useParams.get('sortby')} */
              >
                <option value="des">Descending</option>
                <option value="asc">
                  Ascending
                </option>
              </select>
            </div>
          </form>
        </div>
        <div className="result">
          <div className="row row-cols-1 row-cols-md-3">
            {productsSearch.map((prod) => (
              <div className="col" key={prod.id}>
                <ShoesCard prod={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
