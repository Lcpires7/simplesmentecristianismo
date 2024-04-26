import { createSlice } from "@reduxjs/toolkit";

const initialState = "christianity";

export const currentCategoryActiveSlice = createSlice({
    name: "currentCategoryActiveSlice",
    initialState,  
    reducers: {
        changeActiveCategory(state, action){
            state = action.payload
        }
    }
})

export const {changeActiveCategory} = currentCategoryActiveSlice.actions 

export default currentCategoryActiveSlice.reducer