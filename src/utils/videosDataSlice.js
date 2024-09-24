import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
    name : 'videos',
    initialState:{
        homePageVideos:[],
        videoCategories:[],
        mainCategory: 0,
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
        ,addVideoCategories:(state,action)=>{
             state.videoCategories = action.payload;
        },
        setMainCategory:(state,action)=>{
            state.mainCategory = action.payload;
        }
    }
})
export const {addHomePageVideos,addSearchVideos,addSearchQuery,addVideoCategories,setMainCategory} = videoDataSlice.actions;
export default videoDataSlice.reducer;