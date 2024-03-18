import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://65f150dbda8c6584131d60d9.mockapi.io/product";

export const fetchProduct = createAsyncThunk("product/fetchProducts",async () =>{
    const response = await axios.get(apiUrl);
    return response.data;
});

export const fetchProductById = createAsyncThunk("product/fetchProductsById",async (id) =>{
    const response = await axios.get(`https://65f150dbda8c6584131d60d9.mockapi.io/product/${id}`);
    const data = await response.data;
    // console.log(data,"slice");
    return data;
});

export const addProduct = createAsyncThunk("product/addProduct",async (product) => {
    const response = await axios.post(apiUrl,product);
    return response.data;
});

export const updateProduct = createAsyncThunk("product/updateProduct",async (product) => {
    const response = await axios.put(`${apiUrl}/${product.id}`,product);
    return response.data;
});

export const deleteProduct = createAsyncThunk("product/deleteProduct",async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    return id;
});

export const ProductSlice = createSlice({
    name : 'product',
    initialState : {
        product: [],
        status : 'idle',
        error : null
    },
    reducers :{},
    extraReducers : (builder) =>{
        builder
        .addCase(fetchProduct.pending, (state) =>{
            state.status = 'Loading...';
        })
        .addCase(fetchProduct.fulfilled, (state,action) =>{
            state.status = 'idle';
            state.product = action.payload;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        }) 
        .addCase(fetchProductById.fulfilled, (state,action) =>{
            state.status = 'idle';
            state.product = action.payload;
        })
        // .addCase(updateProduct.fulfilled, (state, action) => {
        //     const updatedProduct = action.payload;
        //     const index = state.product.findIndex(product => product.id === updatedProduct.id);
        //     if (index !== -1) {
        //         state.product[index] = updatedProduct; 
        //     }
        // })

        .addCase(updateProduct.fulfilled,(state,action) =>{
            const updateProduct = action.payload;
            state.product = state.product.map((prod) =>{
                prod.id === updateProduct.id ? updateProduct : prod;
            })
        })
        .addCase(deleteProduct.fulfilled, (state,action)=>{
            state.product = state.product.filter((product) => product.id !== action.payload);
        });
    },
});

export default ProductSlice.reducer;