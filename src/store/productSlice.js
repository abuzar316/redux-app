import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = {
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: "loading",
}


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            // console.log(action)
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
    }
})

export const { setProducts, setStatus } = productsSlice.actions;

export default productsSlice.reducer;


export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result;
});




// thunk function

// export function fetchProducts() {
//     return async function fetchProductsThunk(disPatch, getState) {

//         disPatch(setStatus(STATUSES.LOADING));

//         try {
//             const data = await fetch('https://fakestoreapi.com/products');
//             const results = await data.json();
//             disPatch(setProducts(results));
//             disPatch(setStatus(STATUSES.IDLE));

//         } catch (error) {
//             console.log(error);
//             disPatch(setStatus(STATUSES.ERROR));
//         }


//     }
// }
