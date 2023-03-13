import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import userSlice from "../features/userSlice";


export const store = configureStore({
    reducer: {
        product: productReducer,
        users: userSlice
    }
})