import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState:{
        isMenuOpen: true,
        isSearching :false,
        IsDarkmode:false,
    },
    reducers:{
        toogleMenu:(state)=>{
          state.isMenuOpen = !state.isMenuOpen;
        },
        OnSearching:(state,action)=>{
           state.isSearching = action.payload; 
        },
        setDarkMode:(state,action)=>{
         state.IsDarkmode = action.payload;
        }

    }
})
export const {toogleMenu,OnSearching,setDarkMode} = appSlice.actions;
export default appSlice.reducer;