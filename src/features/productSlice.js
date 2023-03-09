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
      } else if (action.payload.method === 'DELETE') {
        let index = arr.findIndex((i) => i.id === action.payload.cart.id);
        arr.splice(index, 1);
        state.cart = arr;
        state.counter = state.counter - 1;
      } else if (action.payload.method === 'INCREMENT') {
        action.payload.cart['qty'] = action.payload.cart['qty'] + 1;
        let index = arr.findIndex((i) => i.id === action.payload.cart.id);
        action.payload.cart['totalPrice'] =
          action.payload.cart['price'] * action.payload.cart['qty'];
        arr.splice(index, 1, action.payload.cart);
        state.cart = arr;
      } else if (action.payload.method === 'DECREMENT') {
        action.payload.cart['qty'] =
          action.payload.cart['qty'] === 1
            ? (action.payload.cart['qty'] = 1)
            : action.payload.cart['qty'] - 1;
        let index = arr.findIndex((i) => i.id === action.payload.cart.id);
        action.payload.cart['totalPrice'] =
          action.payload.cart['price'] * action.payload.cart['qty'];
        arr.splice(index, 1, action.payload.cart);
      }
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
