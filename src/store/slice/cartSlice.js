import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItems.find(
        item => item.id === action.payload.id,
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.cartItems.push({...action.payload, quantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decremenetQuantity: (state, action) => {
      console.log(action.payload);
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (action.payload.quantity === 1) {
        const filteredBasket = state.cartItems.filter(
          item => item.id !== action.payload.id,
        );
        state.cartItems = filteredBasket;
      } else {
        item.quantity -= 1;
      }
    },
  },
});
export const {addToCart, incrementQuantity, decremenetQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
