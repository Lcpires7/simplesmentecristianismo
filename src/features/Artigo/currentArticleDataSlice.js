import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: {}
}

export const currentArticleDataSlice = createSlice({
    name: 'currentArticleDataSlice',
    initialState,
    reducers: {

    },
})

// export const { } = currentArticleDataSlice.actions

export default currentArticleDataSlice.reducer