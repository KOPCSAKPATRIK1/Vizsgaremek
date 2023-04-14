import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products:[],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price;
        },
        removeProduct: (state, action) => {

            const index = state.products.findIndex(
                (product) => product.id === action.payload.productId
            );
     
            const removedProduct = state.products[index];
            const removedProductPrice = removedProduct.price * removedProduct.quantity;
            const removedProductQuantity = removedProduct.quantity;

            state.products.splice(index, 1);
  
            state.total -= removedProductPrice;
            state.quantity -= removedProductQuantity;
        },
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;