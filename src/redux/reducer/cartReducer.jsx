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
      console.log(action.payload);
    },
  },
});

export const { addToCartAction } = cartReducer.actions;

export default cartReducer.reducer;
