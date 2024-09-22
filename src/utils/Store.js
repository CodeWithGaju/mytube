import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videosDataSlice from "./videosDataSlice";
const store = configureStore({
    reducer:{
     app: appSlice,
     search: searchSlice,
     chats: chatSlice,
     videosData: videosDataSlice,
    }
})

export default store;