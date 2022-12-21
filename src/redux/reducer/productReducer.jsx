import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "nike 1",
      price: 1000,
      image: "https://picsum.photos/id/1/200/200",
    },
  ],
  productDetail: {
    id: 1,
    name: "nike 1",
    price: 1000,
    image: "https://picsum.photos/id/1/200/200",
  },
};

const productReducer = createSlice({
  name: "productReducer", //tên của reducer
  initialState, //giá trị state ban đầu (default)
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { getProductAction, getProductDetailAction } =
  productReducer.actions;

export default productReducer.reducer;

// async action
export const getAllProductApi = async (dispatch2) => {
  const result = await axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  const action = getProductAction(result.data.content);
  dispatch2(action);
};

// middleWare (redux thunk)
export const getProductByIdApi = (id) => {
  return async (dispatch) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    // Sau khi có được dữ liệu từ API, dispatch lần 2 lên reducer
    const action = getProductDetailAction(result.data.content);
    dispatch(action);
  };
};
