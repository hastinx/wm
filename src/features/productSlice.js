import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    cart: [],
    counter: 0,
  },
  reducers: {
    update: (state, action) => {
      let arr = state.cart;

      if (action.payload.method === 'ADD') {
        state.cart = [action.payload.cart, ...arr];
        state.counter = state.counter + 1;
      } else {
        var index = arr.findIndex((i) => i.id === action.payload.cart.id);
        arr.splice(index, 1);
        state.cart = arr;
        state.counter = state.counter - 1;
      }
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
