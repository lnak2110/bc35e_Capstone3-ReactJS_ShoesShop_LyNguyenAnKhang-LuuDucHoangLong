import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { http } from '../../utils/config';

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: 'nike 1',
      price: 1000,
      image: 'https://picsum.photos/id/1/200/200',
    },
  ],
  productDetail: {
    id: 1,
    name: 'nike 1',
    price: 1000,
    image: 'https://picsum.photos/id/1/200/200',
  },
  productAmount: 1,
  productsSearch: [],
  // sortProduct: [],
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
    changeProductAmountAction: (state, { payload }) => {
      if (state.productAmount === 1 && payload === -1) {
        state.productAmount += 0;
        return;
      }
      state.productAmount += payload;
    },
    resetProductAmountAction: (state) => ({ ...state, productAmount: 1 }),
    getProductByKeywordAction: (state, action) => {
      state.productsSearch = action.payload;
    },
    // sortProductByOption: (state, action) => {
    //   state.sortProduct = action.payload;
    // }
  },
});

export const {
  getProductAction,
  getProductDetailAction,
  changeProductAmountAction,
  resetProductAmountAction,
  getProductByKeywordAction,
} = productReducer.actions;

export default productReducer.reducer;

// async action
export const getAllProductApi = async (dispatch2) => {
  const result = await axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET',
  });
  const action = getProductAction(result.data.content);
  dispatch2(action);
};

// middleWare (redux thunk)
export const getProductByIdApi = (id) => {
  return async (dispatch) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: 'GET',
    });
    // Sau khi có được dữ liệu từ API, dispatch lần 2 lên reducer
    const action = getProductDetailAction(result.data.content);
    dispatch(action);
  };
};

export const getProductByKeywordApi = (keywordOnUrl) => {
  return async (dispatch) => {
    try {
      if (keywordOnUrl) {
        const result = await http.get(`/api/Product?keyword=${keywordOnUrl}`);
        dispatch(getProductByKeywordAction(result.data.content));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const sortProductByOption = (keywordOnUrl, sortby) => {
//   return async (dispatch) => {
//     try {
//       if (sortby && keywordOnUrl) {
//         const result = await http.get(`/api/Product?keyword=${keywordOnUrl}&&${sortby}`);
//         dispatch(sortProductByOption(result.data.content));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };