import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        cartProducts: [],
    },
    reducers: {
        saveProducts: (state, action) => {
            /**
             * action - {type: "", payload: []}
             */
            console.log("HERE", state, action);
            if (action.payload) {
                state.products = [];
                state.products.push(...action.payload);
            }
        },
        saveCartProducts: (state, action) => {
            if (action.payload) {
                state.cartProducts = [];
                state.cartProducts.push(...action.payload);
            }
        },
        deleteProduct: (state, action) => { },
    },
});

// Action creators are generated for each case reducer function
export const { saveProducts, saveCartProducts, deleteProduct } =
    ProductsSlice.actions;
export default ProductsSlice.reducer;