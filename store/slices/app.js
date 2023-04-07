import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action){
           state.isLoading = action.payload
        }
    }
})

export const appActions = appSlice.actions;
export default appSlice.reducer;