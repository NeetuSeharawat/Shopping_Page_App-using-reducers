import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
   name:'ui',
   initialState:{cartIsVisible:false},  
   reducers:{                         //reducer- map of method represent all the actions
    toggle(state) {                     // here using one method-toggle who receives all states
    state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
