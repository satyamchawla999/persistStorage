import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./actionCreator";

const initialState = {
    posts:[],
    loading:false
}


const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending,(state)=>{
            state.loading = true;
        })

        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.loading = false
            state.posts = action.payload; 
        })

        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    },
});

export default postsSlice.reducer;