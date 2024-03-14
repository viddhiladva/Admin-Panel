import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slice/ProductSlice";

export const store = configureStore({
    reducer :{
        product : ProductReducer,
    }
})