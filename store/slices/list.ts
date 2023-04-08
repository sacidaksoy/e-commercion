import { IListSliceInitialState, Products } from "@/types/products";
import { createSlice } from "@reduxjs/toolkit"

const initialState: IListSliceInitialState = {
  loading: false,
  listedProduct: [],
  error: ""
}

const productRegularList = createSlice({
  name: "list",
  initialState,
  reducers: {
    lowest(state, action) {
      state.loading = true;
      state.listedProduct = action.payload?.slice().sort((a: any, b: any) => a.price - b.price);
      state.loading = false;
    },
    highest(state, action) {
      state.loading = true;
      state.listedProduct = action.payload?.slice().sort((a: any, b: any) => b.price - a.price);
      state.loading = false;
    },
    regular(state, { payload }) {
      state.loading = true;
      const filteredProducts = payload.products?.filter((product: Products) => product.title.toLowerCase().includes(payload.search.toLowerCase()))
      state.listedProduct = filteredProducts;
      state.loading = false;
    }
  },
})

export const listActions = productRegularList.actions;
export default productRegularList.reducer;