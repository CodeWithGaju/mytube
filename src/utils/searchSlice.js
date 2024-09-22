import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState:{

    },
    reducers:{
        Search_cache:(state,action)=>{
            state = Object.assign(state,action.payload)
        }
    }
})
export const {Search_cache} = searchSlice.actions;
export default searchSlice.reducer;