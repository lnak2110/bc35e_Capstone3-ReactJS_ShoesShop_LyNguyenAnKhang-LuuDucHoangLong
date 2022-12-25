import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  cartAmount: 0,
};

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      // state.cartProducts = action.payload;
      const product = action.payload;
      console.log(product);
      const productFound = state.cartProducts.find((p) => p.id === product.id);

      if (productFound) {
        productFound.amount += product.amount;
      } else {
        state.cartProducts.push(product);
      }
    },
  },
});

export const { addToCartAction } = cartReducer.actions;

export default cartReducer.reducer;
