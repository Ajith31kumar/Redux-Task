import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Reducers/ProductsSlice";

// ROOT REDUCER
export default configureStore({
  reducer: {
    productsData: ProductsReducer,
  },
});