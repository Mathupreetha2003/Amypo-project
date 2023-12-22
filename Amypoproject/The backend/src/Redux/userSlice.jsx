import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"bookdetails",
    initialState:{
        bookdetails: [],
    },

    reducers:{
        add:(state,action) =>{
            state.bookdetails.push(action.payload);
        },
        remove:(state,action) =>{
            state.bookdetails = state.bookdetails.filter((_,i) => i !== action.payload);
        },
        
    }  ,
});

export const {add,remove } = userSlice.actions;

export const selectBookDetails = (state)=> state.bookdetails.bookdetails;



export default userSlice.reducer;