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
      const { id: productId, productAmount } = action.payload;
      const product = state.cartProducts.find((id) => id === productId);

      if (!product) {
        state.cartProducts.push({ ...product, amount: productAmount });
      } else {
        product.amount += productAmount;
      }
    },
  },
});

export const { addToCartAction } = cartReducer.actions;

export default cartReducer.reducer;
