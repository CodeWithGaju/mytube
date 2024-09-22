import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
    name : 'videos',
    initialState:{
        homePageVideos:[],
        searchVideo:[],
        searchQuery:"",
    },
    reducers:{
        addHomePageVideos:(state,action)=>{
            state.homePageVideos = action.payload;
        },
        addSearchVideos: (state,action)=>{
            state.searchVideo = action.payload;
        },
        addSearchQuery:(state,action)=>{
            state.searchQuery = action.payload;
        }
    }
})
export const {addHomePageVideos,addSearchVideos,addSearchQuery} = videoDataSlice.actions;
export default videoDataSlice.reducer;