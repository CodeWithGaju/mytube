import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        chatMessage : [
      
        ],
    },
    reducers:{
        addChats:(state,action)=>{
        state.chatMessage.splice(10,1);
          state.chatMessage.unshift(action.payload);
        }
    }
})
export const {addChats} = chatSlice.actions;
export default chatSlice.reducer;
